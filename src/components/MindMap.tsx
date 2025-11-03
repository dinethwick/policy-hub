import { useState, useRef, useMemo, useEffect } from 'react';

interface MindMapNode {
  id: string;
  title: string;
  description: string;
  children?: MindMapNode[];
  level: number;
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  parentId?: string | null;
  scenario?: {
    allowed: string;
    notAllowed: string;
  };
}

interface MindMapProps {
  nodes: MindMapNode[];
}

interface HoverCardProps {
  node: MindMapNode;
  position: { x: number; y: number };
  visible: boolean;
}

interface Edge {
  from: string;
  to: string;
}

const HoverCard = ({ node, position, visible }: HoverCardProps) => {
  if (!visible) return null;

  return (
    <div
      className="fixed z-50 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 max-w-sm pointer-events-none"
      style={{
        left: position.x + 20,
        top: position.y - 10,
        transform: 'translateY(-50%)',
      }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-3">{node.title}</h3>
      <p className="text-gray-700 leading-relaxed">{node.description}</p>
      {node.scenario && (
        <div className="mt-4 space-y-2">
          <div className="text-sm font-semibold text-gray-700">Scenario:</div>
          <div className="bg-green-50 border-l-2 border-green-500 p-2 rounded text-xs">
            <div className="font-semibold text-green-700 mb-1">Allowed:</div>
            <div className="text-gray-700">{node.scenario.allowed}</div>
          </div>
          <div className="bg-red-50 border-l-2 border-red-500 p-2 rounded text-xs">
            <div className="font-semibold text-red-700 mb-1">Not Allowed:</div>
            <div className="text-gray-700">{node.scenario.notAllowed}</div>
          </div>
        </div>
      )}
      {node.children && node.children.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">
            Subcategories:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {node.children.map(child => (
              <li key={child.id} className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                {child.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const getNodeSize = (level: number) => {
  const baseDiameter = 120;
  const levelMultiplier = 1 - level * 0.08;
  const diameter = Math.max(baseDiameter * levelMultiplier, 100);
  return {
    diameter,
    radius: diameter / 2,
  };
};

const processMindMapData = (
  nodes: MindMapNode[]
): { nodes: MindMapNode[]; edges: Edge[] } => {
  const flatNodes: MindMapNode[] = [];
  const edges: Edge[] = [];

  const traverse = (
    nodesToTraverse: MindMapNode[],
    level = 0,
    parentId: string | null = null
  ) => {
      nodesToTraverse.forEach(node => {
        const { diameter, radius } = getNodeSize(level);
        // Create a clean node without nested children in the flat structure
        const flatNode = {
          id: node.id,
          title: node.title,
          description: node.description,
          level,
          parentId,
          width: diameter,
          height: diameter,
          radius,
          x: 0,
          y: 0,
          children: node.children, // Keep for hover card info
          scenario: node.scenario, // Keep for hover card info
        };
      
      flatNodes.push(flatNode);

      // Create edge if this node has a parent
      if (parentId) {
        edges.push({ from: parentId, to: node.id });
      }

      // Recursively process children
      if (node.children && node.children.length > 0) {
        traverse(node.children, level + 1, node.id);
      }
    });
  };

  traverse(nodes);
  
  console.log('Processed nodes:', flatNodes.length);
  console.log('Edges created:', edges.length);
  console.log('Edges:', edges);
  
  return { nodes: flatNodes, edges };
};

const MindMapNodeComponent = ({
  node,
  onHover,
  onLeave,
}: {
  node: MindMapNode;
  onHover: (node: MindMapNode, event: React.MouseEvent) => void;
  onLeave: () => void;
}) => {
  const getNodeColor = () => {
    const colors = [
      'bg-gradient-to-br from-blue-500/20 to-blue-600/10',
      'bg-gradient-to-br from-green-500/20 to-green-600/10',
      'bg-gradient-to-br from-purple-500/20 to-purple-600/10',
      'bg-gradient-to-br from-orange-500/20 to-orange-600/10',
      'bg-gradient-to-br from-pink-500/20 to-pink-600/10',
      'bg-gradient-to-br from-indigo-500/20 to-indigo-600/10',
    ];
    return colors[node.level % colors.length];
  };

  const size = { width: node.width || 120, height: node.height || 120 };
  const colorClass = getNodeColor();

  return (
    <div
      className={`absolute cursor-pointer group transition-all duration-300 hover:scale-110 z-20`}
      style={{
        left: node.x,
        top: node.y,
        width: size.width,
        height: size.height,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={e => onHover(node, e)}
      onMouseLeave={onLeave}
    >
      <div
        className={`w-full h-full ${colorClass} backdrop-blur-sm rounded-full border-2 border-white/30 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
      >
        <div className="text-center px-3">
          <h3
            className={`font-semibold text-gray-800 leading-tight ${
              node.level === 0 ? 'text-sm' : 'text-xs'
            }`}
            title={node.title}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              wordBreak: 'break-word'
            }}
          >
            {node.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const MindMap = ({ nodes }: MindMapProps) => {
  const [hoveredNode, setHoveredNode] = useState<MindMapNode | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    const zoomSensitivity = 0.001;
    const delta = -e.deltaY * zoomSensitivity;
    const newZoom = Math.min(Math.max(0.5, zoom + delta), 3); // Limit zoom between 0.5x and 3x
    
    // Zoom towards mouse position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Calculate the point under the mouse before zoom
      const pointX = (mouseX - rect.width / 2 - panOffset.x) / zoom;
      const pointY = (mouseY - rect.height / 2 - panOffset.y) / zoom;
      
      // Calculate new pan offset to keep the point under the mouse
      const newPanX = mouseX - rect.width / 2 - pointX * newZoom;
      const newPanY = mouseY - rect.height / 2 - pointY * newZoom;
      
      setZoom(newZoom);
      setPanOffset({ x: newPanX, y: newPanY });
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPanOffset({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart]);

  const { nodes: flatNodes, edges } = useMemo(() => processMindMapData(nodes), [nodes]);

  const positionedNodes = useMemo(() => {
    if (flatNodes.length === 0) {
      return [];
    }

    // Group nodes by level
    const nodesByLevel = flatNodes.reduce((acc, node) => {
      const level = node.level;
      if (!acc[level]) acc[level] = [];
      acc[level].push(node);
      return acc;
    }, {} as Record<number, MindMapNode[]>);

    const positioned: MindMapNode[] = [];
    const levelCount = Object.keys(nodesByLevel).length;
    
    // Calculate vertical spacing between levels (top to bottom)
    const verticalSpacing = 300; // Fixed spacing between levels
    const minHorizontalGap = 20;

    // Position nodes level by level
    Object.keys(nodesByLevel)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .forEach((levelStr, levelIndex) => {
        const level = parseInt(levelStr);
        const nodesInLevel = nodesByLevel[level];

        // Calculate total width needed for this row
        const totalNodesWidth = nodesInLevel.reduce(
          (sum, node) => sum + (node.width || 120),
          0
        );
        const totalGapWidth = Math.max(0, (nodesInLevel.length - 1) * minHorizontalGap);
        const totalRowWidth = totalNodesWidth + totalGapWidth;

        // Start X position (centered horizontally)
        let currentX = -totalRowWidth / 2;

        nodesInLevel.forEach(node => {
          const y = (verticalSpacing * levelIndex) - (verticalSpacing * (levelCount - 1) / 2);
          const x = currentX + (node.width || 120) / 2;

          positioned.push({ 
            ...node, 
            x: Math.round(x), 
            y: Math.round(y) 
          });
          
          currentX += (node.width || 120) + minHorizontalGap;
        });
      });

    console.log('Positioned nodes:', positioned.length);
    console.log('Sample positions:', positioned.slice(0, 3));

    return positioned;
  }, [flatNodes]);

  const handleNodeHover = (node: MindMapNode, event: React.MouseEvent) => {
    setHoveredNode(node);
    setHoverPosition({ x: event.clientX, y: event.clientY });
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 pt-16 px-4 pb-8">
      <div
        ref={containerRef}
        className="relative w-full h-full bg-white/30 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Mind Map Content Container */}
        <div
          className="absolute"
          style={{
            transform: `translate(calc(-50% + ${panOffset.x}px), calc(-50% + ${panOffset.y}px)) scale(${zoom})`,
            left: '50%',
            top: '50%',
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* CSS-based connection lines */}
          {edges.map((edge) => {
            const parent = positionedNodes.find(n => n.id === edge.from);
            const child = positionedNodes.find(n => n.id === edge.to);

            if (!parent || !child || !parent.width || !child.width) {
              return null;
            }

            const radius = parent.radius || 60;
            const childRadius = child.radius || 60;
            
            // For top-to-bottom layout, connect from bottom of parent to top of child
            // Calculate direction vector from parent to child
            const dx = child.x - parent.x;
            const dy = child.y - parent.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            
            // Start point: bottom edge of parent circle (along the direction to child)
            const x1 = parent.x + (dx / distance) * radius;
            const y1 = parent.y + (dy / distance) * radius;
            
            // End point: top edge of child circle (along the direction from parent)
            const x2 = child.x - (dx / distance) * childRadius;
            const y2 = child.y - (dy / distance) * childRadius;

            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

            return (
              <div
                key={`css-line-${edge.from}-${edge.to}`}
                className="absolute pointer-events-none"
                style={{
                  position: 'absolute',
                  left: `${x1}px`,
                  top: `${y1}px`,
                  width: `${length}px`,
                  height: '1px',
                  backgroundColor: '#94a3b8',
                  transformOrigin: '0 50%',
                  transform: `rotate(${angle}deg)`,
                  zIndex: 5,
                  opacity: 0.4
                }}
              />
            );
          })}

          {positionedNodes.map(node => (
            <MindMapNodeComponent
              key={node.id}
              node={node}
              onHover={handleNodeHover}
              onLeave={handleNodeLeave}
            />
          ))}
        </div>
      </div>

      <HoverCard
        node={hoveredNode!}
        position={hoverPosition}
        visible={!!hoveredNode}
      />
    </div>
  );
};

export default MindMap;

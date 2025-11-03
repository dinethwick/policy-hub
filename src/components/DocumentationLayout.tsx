import React, { useState, useMemo, useEffect } from 'react'

interface MindMapNode {
  id: string
  title: string
  description: string
  level: number
  x: number
  y: number
  children?: MindMapNode[]
  scenario?: {
    allowed: string
    notAllowed: string
  }
}

interface DocumentationLayoutProps {
  nodes: MindMapNode[]
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({ nodes }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())

  // Function to find all parent nodes of a given node
  const findParentNodes = (targetId: string, nodeList: MindMapNode[], parents: string[] = []): string[] => {
    for (const node of nodeList) {
      if (node.id === targetId) {
        return parents
      }
      if (node.children) {
        const result = findParentNodes(targetId, node.children, [...parents, node.id])
        if (result.length > 0) {
          return result
        }
      }
    }
    return []
  }

  // Alternative function to find parent nodes using a different approach
  const findParentNodesAlt = (targetId: string): string[] => {
    const findInTree = (nodeList: MindMapNode[], currentPath: string[] = []): string[] => {
      for (const node of nodeList) {
        const newPath = [...currentPath, node.id]
        if (node.id === targetId) {
          return currentPath
        }
        if (node.children) {
          const result = findInTree(node.children, newPath)
          if (result.length > 0) {
            return result
          }
        }
      }
      return []
    }
    return findInTree(nodes)
  }

  // Function to expand all parent nodes
  const expandParentNodes = (nodeId: string) => {
    const parentIds = findParentNodesAlt(nodeId)
    const newExpanded = new Set(expandedNodes)
    parentIds.forEach(parentId => newExpanded.add(parentId))
    setExpandedNodes(newExpanded)
  }

  // Flatten all nodes for sidebar navigation
  const flatNodes = useMemo(() => {
    const flatten = (nodeList: MindMapNode[], level = 0): Array<MindMapNode & { level: number }> => {
      const result: Array<MindMapNode & { level: number }> = []
      
      nodeList.forEach(node => {
        result.push({ ...node, level })
        if (node.children) {
          result.push(...flatten(node.children, level + 1))
        }
      })
      
      return result
    }
    
    return flatten(nodes)
  }, [nodes])

  // Get the selected node
  const selectedNode = flatNodes.find(node => node.id === selectedNodeId) || flatNodes[0]

  // Get child nodes of the selected node
  const childNodes = selectedNode?.children || []

  // Expand parent nodes when selectedNodeId changes
  useEffect(() => {
    if (selectedNodeId) {
      expandParentNodes(selectedNodeId)
    }
  }, [selectedNodeId, nodes])

  // Toggle node expansion
  const toggleNodeExpansion = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId)
    } else {
      newExpanded.add(nodeId)
    }
    setExpandedNodes(newExpanded)
  }

  // Render hierarchical sidebar
  const renderSidebarNode = (node: MindMapNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedNodes.has(node.id)
    const isSelected = selectedNodeId === node.id

    return (
      <div key={node.id}>
        <div
          className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-200 ${
            isSelected
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          style={{ paddingLeft: `${level * 20 + 16}px` }}
          onClick={() => {
            setSelectedNodeId(node.id)
            if (hasChildren) {
              toggleNodeExpansion(node.id)
            }
          }}
        >
          <div className="flex items-center">
            {hasChildren && (
              <span className="mr-2 text-sm">
                {isExpanded ? '▼' : '▶'}
              </span>
            )}
            <span className="font-medium text-sm uppercase tracking-wide">
              {node.title}
            </span>
          </div>
        </div>
        
        {/* Render children if expanded */}
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map(child => renderSidebarNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
            <div className="space-y-1">
              {nodes.map((node) => renderSidebarNode(node, 0))}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {selectedNode && (
              <div>
                {/* Main Content */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedNode.title}
                  </h1>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {selectedNode.description}
                    </p>
                    {selectedNode.scenario && (
                      <div className="mt-6 space-y-3">
                        <div className="text-sm font-semibold text-gray-700">Scenario:</div>
                        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                          <div className="text-sm font-semibold text-green-700 mb-1">Allowed:</div>
                          <div className="text-sm text-gray-700">{selectedNode.scenario.allowed}</div>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                          <div className="text-sm font-semibold text-red-700 mb-1">Not Allowed:</div>
                          <div className="text-sm text-gray-700">{selectedNode.scenario.notAllowed}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subcategories */}
                {childNodes.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Subcategories
                    </h2>
                    <div className="grid gap-4">
                      {childNodes.map((child) => (
                        <div
                          key={child.id}
                          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                          onClick={() => {
                            setSelectedNodeId(child.id)
                            expandParentNodes(child.id)
                          }}
                        >
                          <h3 className="text-lg font-medium text-gray-900 mb-3">
                            {child.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            {child.description}
                          </p>
                          {child.scenario && (
                            <div className="mt-4 space-y-3">
                              <div className="text-sm font-semibold text-gray-700">Scenario:</div>
                              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                                <div className="text-sm font-semibold text-green-700 mb-1">Allowed:</div>
                                <div className="text-sm text-gray-700">{child.scenario.allowed}</div>
                              </div>
                              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                                <div className="text-sm font-semibold text-red-700 mb-1">Not Allowed:</div>
                                <div className="text-sm text-gray-700">{child.scenario.notAllowed}</div>
                              </div>
                            </div>
                          )}
                          {child.children && child.children.length > 0 && (
                            <div className="mt-3 text-sm text-blue-600">
                              {child.children.length} subcategory{child.children.length !== 1 ? 'ies' : ''}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationLayout

import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapBackgroundProps {
  className?: string
}

// Component to disable map interactions
const MapController = () => {
  const map = useMap()

  useEffect(() => {
    map.dragging.disable()
    map.touchZoom.disable()
    map.doubleClickZoom.disable()
    map.scrollWheelZoom.disable()
    map.boxZoom.disable()
    map.keyboard.disable()
    if (map.zoomControl) {
      map.zoomControl.remove()
    }

    // Set view to focus on Australia and New Zealand only
    // Center: between Australia and New Zealand, excluding Indonesia and Papua New Guinea
    map.setView([-32.0, 150.0], 4.5, { animate: false })
  }, [map])

  return null
}

const MapBackground = ({ className = '' }: MapBackgroundProps) => {
  // Center point focused on Australia and New Zealand only
  // Positioned to exclude Indonesia and Papua New Guinea
  const center: [number, number] = [-32.0, 150.0] // Centered to show both countries, excluding neighboring countries
  const zoom = 4.5 // Zoomed in to exclude Papua New Guinea and Indonesia
  
  // Set bounds to strictly limit view to Australia and New Zealand region
  // Excludes Indonesia (west of ~130°E), Papua New Guinea (north of ~10°S)
  const bounds: [[number, number], [number, number]] = [
    [-50.0, 130.0], // Southwest corner (south of New Zealand, west of Australia - excludes Indonesia)
    [-15.0, 180.0]  // Northeast corner (north of Australia, excludes Papua New Guinea, east of New Zealand)
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="map-background"
        zoomControl={false}
        attributionControl={false}
        maxZoom={6}
        minZoom={3}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
      >
        <MapController />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="map-tile-layer"
        />
        
        {/* Custom CSS for styling */}
        <style>{`
          .map-background {
            filter: brightness(0.85) contrast(1.1) saturate(0.6);
            opacity: 0.65;
            transition: all 0.8s ease-in-out;
            pointer-events: none;
          }
          
          .leaflet-container {
            background: transparent !important;
            font-family: inherit;
          }
          
          .leaflet-tile-container img {
            filter: grayscale(0.2) opacity(0.9);
            transition: opacity 0.3s ease;
          }
          
          .map-tile-layer {
            pointer-events: none;
          }
          
          /* Hide all Leaflet controls and labels */
          .leaflet-control,
          .leaflet-popup,
          .leaflet-tooltip,
          .leaflet-bottom,
          .leaflet-top {
            display: none !important;
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .map-background {
              opacity: 0.55;
              filter: brightness(0.8) contrast(1.05) saturate(0.5);
            }
          }
        `}</style>
      </MapContainer>
      
      {/* Animated gradient overlay with flowing effect */}
      <div className="absolute inset-0 pointer-events-none animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/45 to-indigo-900/50" />
      </div>
      
      {/* Animated wave-like gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Wave 1 */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-wave"
          style={{ 
            animationDelay: '0s',
            animationDuration: '15s',
            transform: 'translateX(-100%)'
          }}
        />
        {/* Wave 2 */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/18 to-transparent animate-wave"
          style={{ 
            animationDelay: '5s',
            animationDuration: '18s',
            transform: 'translateX(-100%)'
          }}
        />
        {/* Wave 3 */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent animate-wave"
          style={{ 
            animationDelay: '10s',
            animationDuration: '20s',
            transform: 'translateX(-100%)'
          }}
        />
      </div>
      
      {/* Floating orb animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300/12 rounded-full blur-3xl animate-float-orb"
          style={{ animationDelay: '0s', animationDuration: '12s' }} 
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-indigo-300/10 rounded-full blur-3xl animate-float-orb-reverse"
          style={{ animationDelay: '2s', animationDuration: '14s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-200/10 rounded-full blur-3xl animate-float-orb"
          style={{ animationDelay: '4s', animationDuration: '16s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float-orb-reverse"
          style={{ animationDelay: '6s', animationDuration: '18s' }} 
        />
      </div>
      
      {/* Radial gradient animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-400/20 via-transparent to-transparent animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-indigo-400/18 via-transparent to-transparent animate-pulse" 
          style={{ animationDelay: '4s', animationDuration: '10s' }} 
        />
      </div>
      
      {/* Custom CSS animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            opacity: 1;
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            opacity: 1.2;
            filter: hue-rotate(8deg) brightness(1.1);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 12s ease-in-out infinite;
        }
        
        @keyframes wave {
          0% {
            transform: translateX(-100%) translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateX(100%) translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(0);
            opacity: 0.8;
          }
        }
        
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(40px, -40px) scale(1.15);
            opacity: 0.8;
          }
          50% {
            transform: translate(0, -50px) scale(1.1);
            opacity: 0.7;
          }
          75% {
            transform: translate(-40px, -30px) scale(0.9);
            opacity: 0.65;
          }
        }
        
        @keyframes float-orb-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(-40px, 40px) scale(0.85);
            opacity: 0.8;
          }
          50% {
            transform: translate(0, 50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(40px, 30px) scale(1.15);
            opacity: 0.65;
          }
        }
        
        .animate-wave {
          animation: wave linear infinite;
        }
        
        .animate-float-orb {
          animation: float-orb ease-in-out infinite;
        }
        
        .animate-float-orb-reverse {
          animation: float-orb-reverse ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}

export default MapBackground


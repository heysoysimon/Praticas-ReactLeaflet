import { 
    MapContainer,
    TileLayer, 
    Marker,
    Popup,
    LayersControl, 
    LayerGroup,
    Circle,
    FeatureGroup,
    Rectangle
    } from 'react-leaflet'
    
    import '../styles/react-leaflet.css'
    import { MarkerIcon } from '../react-leaflet-icon'

const Controles = () => {
    const center = [9.099726451923722, -67.1502652169602]
const rectangle = [
  [10.500094737208338, -67.00710998051179],
  [10.500094737208338, -67.00710998051179],
]
  return (
    <div>
        <MapContainer center={center} zoom={5} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LayersControl position="topright">
      <LayersControl.Overlay name="Marker with popup">
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'blue' }}
            radius={200}
          />
          <Circle
            center={center}
            pathOptions={{ fillColor: 'red' }}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: 'green', fillColor: 'green' }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Feature group">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[10.500094737208338, -67.00710998051179]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  </MapContainer>,
  <div className="sidebar">
        <h2>Disney World</h2>
        <p>
          Bay Lake, FL
        </p>
        <ul>
          <li>Lat: 28.3852</li>
          <li>Long: -81.5639</li>
        </ul>
        <p>
          <button>
            Set View to Disney World
          </button>
        </p>
        <h2>Disneyland</h2>
        <p>
          Anaheim, CA
        </p>
        <ul>
          <li>Lat: 33.8121</li>
          <li>Long: -117.9190</li>
        </ul>
        <p>
          <button >
            Fly to Disneyland
          </button>
        </p>
      </div>
    </div>
  )
}

export default Controles

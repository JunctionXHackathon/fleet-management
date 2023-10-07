import React from 'react'
import { MapContainer, Marker, Polygon, Popup, Rectangle, TileLayer, Tooltip, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';


L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
        iconUrl: require("leaflet/dist/images/marker-icon.png").default,
        shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
      });

export default function Map() {
  return (
        <MapContainer className='h-[400px] w-[600px]' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  )
}

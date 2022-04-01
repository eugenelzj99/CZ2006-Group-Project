import * as React from 'react';
import { MapContainer, ZoomControl, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import MapCurrentLocation from './MapCurrentLocation';
import MapLocations from './MapLocations';






const ViewMap = () => {



  return (
    <div>
      <MapContainer 
        center={[1.290270, 103.851959]} 
        zoom={50} 
        zoomControl={false} 
        style={{ height: '100vh', width: '100%' }}>

      <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Basic Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
      
          <LayersControl.BaseLayer name="Topo Map">
            <TileLayer
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
      </LayersControl>
      
      <MapCurrentLocation />
      <MapLocations />
      <ZoomControl position='topright'/>
      </MapContainer>
    </div>
  )
}

export default ViewMap
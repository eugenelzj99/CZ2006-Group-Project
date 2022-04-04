import * as React from 'react';
import { MapContainer, ZoomControl, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Circle from '@uiw/react-color-circle';

import MapCurrentLocation from './MapCurrentLocation';
// import GymLocation from './GymLocation';
// import ParkLocation from './ParkLocation';
// import HealthierEateryLocation from './HealthierEateryLocation';
// import AquaticFacilityLocation from './AquaticFacilityLocation';
// import SportSGFacilityLocation from './SportSGFacilityLocation';
import MapLocations from './MapLocations';



const ViewMap = () => {
  return (
    <div>
      <th>
        <th>Current Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Circle colors={['#2AAD27']}/></th>
        <th>Gyms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Circle colors={['#FFD326']}/></th>
        <th>Parks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Circle colors={['#CB8427']}/></th>
        <th>Healthier Eateries&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Circle colors={['#CB2B3E']}/></th>
        <th>Aquatic Facilities&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Circle colors={['#9C2BCB']}/></th>
        <th>SportSG Facilities<Circle colors={['#2A81CB']}/></th>
      </th>

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

      {/* <LayersControl position="topleft" collapsed={false}>
        <LayersControl.Overlay name = 'Gyms'>
          <GymLocation />
        </LayersControl.Overlay>
        <LayersControl.Overlay name = 'Parks'>
          <ParkLocation />
        </LayersControl.Overlay>
        <LayersControl.Overlay name = 'Healthier Eateries'>
          <HealthierEateryLocation />
        </LayersControl.Overlay>
        <LayersControl.Overlay name = 'Aquatic Facilities'>
          <AquaticFacilityLocation />
        </LayersControl.Overlay>
        <LayersControl.Overlay name = 'SportSG Facilities'>
          <SportSGFacilityLocation />
        </LayersControl.Overlay>
      </LayersControl> */}

      </MapContainer>
    </div>
  )
}

export default ViewMap
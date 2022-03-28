import * as React from "react";
import { MapContainer, ZoomControl } from 'react-leaflet'
import MapLayers from './MapLayers'

const ViewMap = () => {

  return (
    <>
      <MapContainer 
        center={[1.290270, 103.851959]} 
        zoom={11} 
        zoomControl={false} 
        style={{ height: '100vh', width: '100%' }}
      >
        <MapLayers />
        <ZoomControl position='topright'/>
      </MapContainer>
    </>
  )
}

export default ViewMap
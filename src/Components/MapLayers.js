import * as React from "react";
import { useState } from 'react'
import { useMapEvents, TileLayer, LayersControl, GeoJSON } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Gyms from '../gyms-sg-geojson.geojson'

const MapLayers = () => {
    // Set all the border data to state array:
    const [borderData, setBorderData] = useState([Gyms])

    // Call useMapEvents:
    const map = useMapEvents({
      // Use leaflet map event as the key and a call back with the 
      // map method as the value:
      zoomend: () => {
        // Get the zoom level once zoom ended:
        console.log(map.getZoom())
      },
      moveend: () => {
      // Get bounds once move has ended:
        console.log(map.getBounds())
      }
    })
  
  
    return (
        <>
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
    </>
    )
  }

export default MapLayers
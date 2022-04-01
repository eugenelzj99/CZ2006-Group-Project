
/*
import * as React from "react";
import { useState } from 'react'
import { useMapEvents, TileLayer, LayersControl, GeoJSON } from 'react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Gyms from '../gyms-sg.json';
import HealthierEateries from '../healthier-eateries.json';
import SportSGFacilities from '../sportsg-sport-facilities.json';
import AquaticFacilities from '../aquaticSG.json';
import Parks from '../ParksSG.json';


const blueMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [15, 20],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const redMarker = new L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2288/2288553.png",
  iconSize: [25, 25],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const blackMarker = new L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/25/25613.png",
  iconSize: [25, 25],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const orangeMarker = new L.icon({
  iconUrl: "http://www.clker.com/cliparts/g/9/4/c/Y/0/orange-map-pin.svg.hi.png",
  iconSize: [15, 20],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});


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


*/
import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import L from "leaflet";
import { Popup, useMap, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import Gyms from '../gyms-sg.json';



/*  START CSS FOR MARKER */
var blueMarker =  L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 26.7],
  iconAnchor: [10, 26.7],
  popupAnchor: [1, -34],
  shadowSize: [26.7, 26.7]
});
/*  END CSS FOR MARKER */

function GymLocation(){
  const map = useMap();
  useEffect(()=>{
    map.locate()
    
    L.geoJSON(Gyms, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: blueMarker });
      },
      onEachFeature: (feature = {}, layer) => {
        const {properties = {} } = feature;
        const {Description} = properties;
        if (!Description) return;
        layer.bindPopup(Description);
      }
    }).addTo(map);
  },[map])

  return(
    <div>
      <GeoJSON data={Gyms} />
    </div>
  )
}

export default GymLocation;
import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import L from "leaflet";
import { Popup, useMap, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import AquaticFacilities from '../aquaticSG.json';



/*  START CSS FOR MARKER */
var violetMarker =  L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [20, 26.7],
    iconAnchor: [10, 26.7],
    popupAnchor: [1, -34],
    shadowSize: [26.7, 26.7]
  });
/*  END CSS FOR MARKER */

function AquaticFacilityLocation(){
    const map = useMap();
    useEffect(()=>{
      map.locate()
      
      L.geoJSON(AquaticFacilities, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, { icon: violetMarker });
        },
        onEachFeature: (feature = {}, layer) => {
          const {properties = {} } = feature;
          const {description} = properties;
          if (!description) return;
          layer.bindPopup(description);
        }
      }).addTo(map);
    },[map])
  
    return(
      <div>
        <GeoJSON data={AquaticFacilities} />
      </div>
    )
  }

export default AquaticFacilityLocation;
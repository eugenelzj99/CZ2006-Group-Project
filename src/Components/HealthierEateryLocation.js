import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import L from "leaflet";
import { Popup, useMap, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import HealthierEateries from '../healthier-eateries.json';



/*  START CSS FOR MARKER */
var redMarker =  L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [20, 26.7],
    iconAnchor: [10, 26.7],
    popupAnchor: [1, -34],
    shadowSize: [26.7, 26.7]
  });
/*  END CSS FOR MARKER */

function HealthierEateryLocation(){
    const map = useMap();
    useEffect(()=>{
      map.locate()
      
      L.geoJSON(HealthierEateries, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, { icon: redMarker });
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
        <GeoJSON data={HealthierEateries} />
      </div>
    )
  }

export default HealthierEateryLocation;
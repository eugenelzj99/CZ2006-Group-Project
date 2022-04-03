import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import L from "leaflet";
import { Popup, useMap, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import SportSGFacilities from '../sportsg-sport-facilities.json';



function SportSGFacilityLocation(){
    const map = useMap();
    useEffect(()=>{
      map.locate()
      
      L.geoJSON(SportSGFacilities, {
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
        <GeoJSON data={SportSGFacilities} />
      </div>
    )
  }

export default SportSGFacilityLocation;
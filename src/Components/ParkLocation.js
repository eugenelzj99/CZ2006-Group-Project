import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import L from "leaflet";
import { Popup, useMap, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import Parks from '../ParksSG.json';

/*  START CSS FOR MARKER */
const orangeMarker = new L.icon({
  iconUrl: "http://www.clker.com/cliparts/g/9/4/c/Y/0/orange-map-pin.svg.hi.png",
  iconSize: [15, 20],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});
/*  END CSS FOR MARKER */

function ParkLocation(){
  const map = useMap();
  useEffect(()=>{
    map.locate()

    L.geoJSON(Parks, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: orangeMarker });
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
      <GeoJSON data={Parks} />
    </div>
  )
}

export default ParkLocation;
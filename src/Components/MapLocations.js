import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import L from "leaflet";
import { Popup, useMap, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import Gyms from '../gyms-sg.json';
import HealthierEateries from '../healthier-eateries.json';
import SportSGFacilities from '../sportsg-sport-facilities.json';
import AquaticFacilities from '../aquaticSG.json';
import Parks from '../ParksSG.json';

/*  START CSS FOR MARKER */
var yellowMarker =  L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 26.7],
  iconAnchor: [10, 26.7],
  popupAnchor: [1, -34],
  shadowSize: [26.7, 26.7]
});

const orangeMarker = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 26.7],
  iconAnchor: [10, 26.7],
  popupAnchor: [1, -34],
  shadowSize: [26.7, 26.7]
});

var redMarker =  L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 26.7],
  iconAnchor: [10, 26.7],
  popupAnchor: [1, -34],
  shadowSize: [26.7, 26.7]
});

var violetMarker =  L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 26.7],
  iconAnchor: [10, 26.7],
  popupAnchor: [1, -34],
  shadowSize: [26.7, 26.7]
});
/*  END CSS FOR MARKER */

function MapLocations(){
  const map = useMap();
  useEffect(()=>{
    map.locate()
    
    L.geoJSON(Gyms, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: yellowMarker });
      },
      onEachFeature: (feature = {}, layer) => {
        const {properties = {} } = feature;
        const {Description} = properties;
        if (!Description) return;
        layer.bindPopup(Description);
      }
    }).addTo(map);

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

    L.geoJSON(SportSGFacilities, {
      onEachFeature: (feature = {}, layer) => {
        const {properties = {} } = feature;
        const {Description} = properties;
        if (!Description) return;
        layer.bindPopup(Description);
      }
    }).addTo(map);

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
    </div>
  )
}

export default MapLocations;
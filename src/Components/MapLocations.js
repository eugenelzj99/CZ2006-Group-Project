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
/*  END CSS FOR MARKER */


function MapLocations(){
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
        return L.marker(latlng, { icon: blackMarker });
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
      
<GeoJSON data={Gyms} />
<GeoJSON data={HealthierEateries} />
<GeoJSON data={SportSGFacilities} />
<GeoJSON data={AquaticFacilities} />
<GeoJSON data={Parks} />


    

    </div>
  )
}

export default MapLocations;

/*
export default class ViewMap extends React.Component {
  componentDidMount() {
    

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

    L.geoJSON(AquaticFacilities, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: blackMarker });
      },
      onEachFeature: (feature = {}, layer) => {
        const {properties = {} } = feature;
        const {description} = properties;
        if (!description) return;
        layer.bindPopup(description);
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
    
  }

  render() {
    
    return [  <MapContainer
      center={[1.390270, 103.851959]}
      zoom={11}
      scrollWheelZoom
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>, 
    

    <div id="map" style={{ height: "50vh" }} />
  ];
  }
  

}
*/
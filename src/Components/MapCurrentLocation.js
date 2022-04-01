import * as React from "react";
import { useState, useEffect } from 'react'
import L from 'leaflet';
import { Popup, useMap, Marker, MapContainer, useMapEvents, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";



/*  START CSS FOR MARKER */
const blackMarker = new L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/25/25613.png",
  iconSize: [25, 25],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

/*  END CSS FOR MARKER */



function MapCurrentLocation(){
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {  // will run everytime render change
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng); 
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);


  return position === null ? null : (
    <div>
      <Marker position={position} icon={blackMarker}>
        <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
    </div>

  );
}

    


export default MapCurrentLocation
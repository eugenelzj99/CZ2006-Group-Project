import * as React from "react";
import { useState, useEffect } from 'react'
import L from 'leaflet';
import { Popup, useMap, Marker, MapContainer, useMapEvents, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";



/*  START CSS FOR MARKER */
var greenMarker =  L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 34],
  iconAnchor: [12, 34],
  popupAnchor: [1, -34],
  shadowSize: [34, 34]
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
      <Marker position={position} icon={greenMarker}>
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
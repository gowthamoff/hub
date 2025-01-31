import { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";

const MapLayer = () => {
  const mapRef = useRef(null); // Use `null` instead of `undefined`
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = new Map({
        target: mapRef.current,
        view: new View({
          center: fromLonLat([0, 0]),
          zoom: 2,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(null);
        mapInstance.current = null;
        // Use `null` to remove the target properly
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapLayer;

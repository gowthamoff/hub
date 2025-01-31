import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import "ol/ol.css";

// Register projections
proj4.defs([
  [
    "EPSG:3857",
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs",
  ],
  ["EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs"],
  [
    "EPSG:3395",
    "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  ],
]);
register(proj4);

const ProjectionComparison = () => {
  const map1Ref = useRef(null);
  const map2Ref = useRef(null);
  const map3Ref = useRef(null);

  useEffect(() => {
    const createMap = (target, projection, center = [0, 0], zoom = 10) => {
      return new Map({
        target: target,
        layers: [
          new TileLayer({
            source: new OSM({
              projection: projection,
            }),
          }),
        ],
        view: new View({
          projection: projection,
          center:
            projection === "EPSG:4326"
              ? center
              : fromLonLat(center, projection),
          zoom: zoom,
        }),
      });
    };

    if (map1Ref.current && map2Ref.current && map3Ref.current) {
      createMap(map1Ref.current, "EPSG:3857", [0, 0], 2);
      createMap(map2Ref.current, "EPSG:4326", [0, 0], 2);
      createMap(map3Ref.current, "EPSG:3395", [0, 0], 2);
    }

    return () => {
      // Cleanup logic
    };
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "30%" }}>
          <h3>Web Mercator (EPSG:3857)</h3>
          <div
            ref={map1Ref}
            style={{
              width: "100%",
              height: "300px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ width: "30%" }}>
          <h3>WGS84 Geographic (EPSG:4326)</h3>
          <div
            ref={map2Ref}
            style={{
              width: "100%",
              height: "300px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ width: "30%" }}>
          <h3>World Mercator (EPSG:3395)</h3>
          <div
            ref={map3Ref}
            style={{
              width: "100%",
              height: "300px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectionComparison;

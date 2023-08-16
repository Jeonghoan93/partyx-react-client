import L from "leaflet";
import {
  MapContainer as LeafletMapContainer,
  Marker,
  TileLayer,
} from "react-leaflet";
import styled from "styled-components";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

// This will tell TypeScript to ignore the next line.
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface MapProps {
  center?: number[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <StyledMapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
    >
      <TileLayer url={url} attribution={attribution} />
      {center && <Marker position={center as L.LatLngExpression} />}
    </StyledMapContainer>
  );
};

export default Map;

const StyledMapContainer = styled(LeafletMapContainer)`
  height: 35vh;
  border-radius: 0.5rem; // approximation for rounded-lg
`;

import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import useDroneWebsocket from "src/hooks/useEventWebsocket";
import { useEvents } from "src/hooks/useEvents";
import { getEvents } from "src/services/events";

const MapView: React.FC = () => {
  const { events, setEvents } = useEvents();
  const defaultCenter: [number, number] = [59.3293, 18.0686];

  useDroneWebsocket();

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
      });
  }, [setEvents]);

  return (
    <MapContainer
      center={defaultCenter}
      zoom={10}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {events.map((event) =>
        event.position ? (
          <Marker
            key={event.id}
            position={[event.position.lat, event.position.lon]}
          >
            <Popup>
              {event.name}
              <br />
              {event.description}
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default MapView;

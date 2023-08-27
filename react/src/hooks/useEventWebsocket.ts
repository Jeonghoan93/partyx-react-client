import { useEffect } from "react";
import { useEvents } from "./useEvents";

const useDroneWebsocket = () => {
  const { setEvents } = useEvents();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost/ws");
    socket.onmessage = (event) => {
      const updatedEvent = JSON.parse(event.data);
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    };

    return () => {
      socket.close();
    };
  }, [setEvents]);
};

export default useDroneWebsocket;

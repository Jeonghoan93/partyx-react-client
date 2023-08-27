import { createContext, useState } from "react";
import { Event } from "src/shared/interfaces/event";

interface EventContextProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

export const EventContext = createContext<EventContextProps | undefined>(
  undefined
);

type EventProviderProps = {
  children: React.ReactNode;
};

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

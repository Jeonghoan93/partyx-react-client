import { useContext } from "react";
import { EventContext } from "src/contexts/EventContext";

export const useEvents = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useEvents must be used within a EventProvider");
  }

  return context;
};

import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import getReservations from "src/actions/getReservations";
import { getCurrentUser } from "src/services/users/getCurrentUser";

import TripsClient from "./TicketsClient";

const TripsPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchReservations = async () => {
      if (currentUser) {
        const res = await getReservations({ userId: currentUser.id });
        setReservations(res);
      }
    };

    fetchReservations();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you haven't reserved any trips."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;

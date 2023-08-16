// Assuming basic structures for Listing, Reservation, and User

interface Listing {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  locationValue: string;
  price: number;
  imageSrc: string;
  category: string[];
  // ... other fields
}

interface Reservation {
  id: string;
  user: User;
  listing: Listing;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  totalPrice: number;

  // ... other fields
}

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  // ... other fields
}

// Create the "Safe" versions of the types

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  favoriteIds?: string[];
};

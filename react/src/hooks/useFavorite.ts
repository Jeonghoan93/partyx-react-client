import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SafeUser } from "src/types";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const navigate = useNavigate();
  const loginModal = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        // Refresh logic would depend on how you've structured your React app.
        // If you had some state management like Redux, you might dispatch an action here.
        navigate(window.location.pathname); // This is a rough way to "refresh" the page with react-router-dom
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorite, listingId, loginModal, navigate]
  );

  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;

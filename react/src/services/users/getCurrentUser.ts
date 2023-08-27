import api from "src/utils/api";

export async function getCurrentUser() {
  try {
    const response = await api.get("api/auth/current-user");
    const data = await response.data;

    if (response) {
      return data;
    } else {
      throw new Error(data.message || "Error fetching user");
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

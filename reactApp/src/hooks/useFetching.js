import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, seIsLoading] = useState(false);
  const [error, setError] = useState("");
  async function fetching(param) {
    try {
      seIsLoading(true);
      await callback(param);
    } catch (error) {
      setError(error.message);
    } finally {
      seIsLoading(false);
    }
  }
  return [fetching, isLoading, error];
};

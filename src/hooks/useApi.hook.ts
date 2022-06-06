import { useCallback, useEffect, useState } from "react";
const axios = require("axios");

/**
 * Hook that returns a data and state of an Api call
 * @param {string}endpoint
 *
 * @returns {any,boolean,boolean}{data, loading, error}
 */
export const useApi = <T>(endpoint: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);

  const callEndpoint = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${endpoint}`);
      setData(result.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    callEndpoint();
  }, [callEndpoint, endpoint]);

  return { data, loading, error };
};

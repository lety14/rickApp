import { useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition.hook";
import PageInfo from "../types/pageInfo.types";

/**
 * Hook that returns a the next endpoint when the user arrives to the bottom of the content
 * @param {PageInfo}info
 *
 * @returns {string} endpoint
 */
const usePagination = <T>(info: PageInfo) => {
  const nextEndpoint = info?.next;
  const [endpoint, setEndpoint] = useState<string | null>(null);

  const scrollPosition: boolean = useScrollPosition();

  useEffect(() => {
    if (scrollPosition && nextEndpoint !== null && nextEndpoint !== undefined) {
      setEndpoint(nextEndpoint);
    }
  }, [scrollPosition, nextEndpoint]);

  return endpoint;
};
export default usePagination;

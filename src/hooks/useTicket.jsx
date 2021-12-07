import React, { useEffect, useState } from "react";
import axios from "axios";

const useTicket = (pageNumber, pageSize) => {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("https://api.github.com/repos/remix-run/remix/issues", {
        params: { page: pageNumber, per_page: pageSize },
      })
      .then((res) => {
        setTickets((prev) => [...prev, ...res.data]);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
        console.log(e);
      });
    return () => {};
  }, [pageNumber, pageSize]);

  return { error, loading, tickets };
};

export default useTicket;

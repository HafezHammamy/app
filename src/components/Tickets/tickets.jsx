import React, { Fragment, useCallback, useRef, useState } from "react";
import useTicket from "../../hooks/useTicket";
import Ticket from "./ticket";
import Loader from "react-loader-spinner";

const Tickets = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(30);
  const { error, loading, tickets } = useTicket(pageNumber, pageSize);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return null;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, pageSize]
  );

  return (
    <Fragment>
      {tickets.map((t, index) => (
        <Ticket
          ref={index + 1 === tickets.length ? lastElement : null}
          key={index}
          ticket={t}
          lastElement={lastElement}
        />
      ))}
      {loading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      )}
      {error !== null ? error : ""}
    </Fragment>
  );
};

export default Tickets;

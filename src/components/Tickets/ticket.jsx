import React from "react";
import Card from "./../layout/card";
import classes from "./ticket.module.css";

const Ticket = React.forwardRef(({ ticket }, ref) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const dateCreated = new Date(ticket.created_at).toLocaleDateString(
    "en-GB",
    options
  );

  const dateUpdated = new Date(ticket.updated_at).toLocaleDateString(
    "en-GB",
    options
  );

  return (
    <Card>
      <div ref={ref} className={classes.ticket}>
        <div>
          <img loading="lazy" src={ticket.user.avatar_url} alt="" />
        </div>
        <div className={classes["ticket-content"]}>
          <p>
            <a href={ticket.user.html_url} target="_blank" rel="noreferrer">
              <strong>{ticket.user.login}</strong>
            </a>
          </p>
          <p>
            <a href={ticket.html_url} target="_blank" rel="noreferrer">
              {" "}
              {ticket.title}
            </a>
          </p>
          <p>
            <span>
              <strong>Created At:</strong> {dateCreated}
            </span>{" "}
            <span>
              {" "}
              <strong>Updated At:</strong> {dateUpdated}
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
});

export default Ticket;

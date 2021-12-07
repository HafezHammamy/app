import React, { useContext } from "react";
import classes from "./main.module.css";
import Tickets from "../Tickets/tickets";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.content}>
        <Tickets />
      </div>
    </main>
  );
};

export default Main;

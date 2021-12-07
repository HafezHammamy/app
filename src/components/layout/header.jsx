import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Github Remix Issues</h1>
      </div>
      <div className={classes.nav}>
        <div>Issues</div>
      </div>
    </header>
  );
};

export default Header;

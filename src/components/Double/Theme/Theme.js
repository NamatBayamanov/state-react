import { useState } from "react";
import classes from "./Theme.module.scss";

function Theme() {

  // let [theme, setTheme] = useState(false);
  
  // let onTheme = (event) => {
  //   setTheme(!theme);
  //   window.localStorage.setItem("state", +event.target);
  // };


  let [theme, setTheme] = useState("");
  
  let onTheme = (event) => {
    setTheme(!theme);
    window.localStorage.setItem("state", event.target);
  };
  
  return ( 
    <>
      <div className={`${classes.Theme} ${theme ? `${classes.active}` : ""}  `}>
        <h2 className={classes.h2}>
          hello world
        </h2>

        <button onClick={onTheme}>
          change this theme
        </button>
      </div>
    </>
  );
}

export default Theme;
import { useState } from "react";
import classes from "./Double.module.scss";


function Double() {

  const [charging, setCharging] = useState({
    phone: true,
    user: true,
  });

  function onChargingChange() {
      setCharging(!charging);
  };




  return ( 
    <>
      <div className={classes.Double}>
        <div className={classes.content}>
          <p>
            I called my friend {charging.user ? "Bakyt" : "Namat"} {charging.phone ? "with Mobile" : "with Sumsung"}.
          </p>
          <button onClick={onChargingChange}>
            change information
          </button>
        </div>
      </div>
    </>
  );
}

export default Double;
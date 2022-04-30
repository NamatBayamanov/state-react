import { useState } from "react";
import classes from "./Double.module.scss";


function Double() {

  const [charging, setCharging] = useState({
    phone: "with mobile",
    user: "Namat",
  });

  function onChargingChange() {
    setCharging(charging.user = "Bakyt", charging.phone = "sumsung",);
  };




  return ( 
    <>
      <div className={classes.Double}>
        <div className={classes.content}>
          <p>
            I called my friend {charging.user} {charging.phone}.
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
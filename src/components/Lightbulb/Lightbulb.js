import { useState } from "react";
import classes from"./Lightbulb.module.scss";


function Lightbulb(props) {

  const [isOn, setIsOn] = useState(true);

  function getButton() {
    setIsOn(!isOn);
  }



  return (
    <div className={classes.Lightbulb}>
      <div className={classes.content}>
        <p>
          Lamp is {isOn ? "on" : "off"}.
        </p>

        <button onClick={getButton}>
          Toggle
        </button>
        
      </div>
      

    </div>
  );
}

export default Lightbulb;
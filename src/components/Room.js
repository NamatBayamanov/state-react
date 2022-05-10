import Lightbulbs from "./Lightbulbs";
import Switch from "./Switch";

import { useState } from "react";

function Room() {

  const [lightbulbs, setlightbulbs] = useState(true);

  function changer() {
    setlightbulbs(!lightbulbs);
  }

  return ( 
    <>
      <div className="Room">
        <h2>
          Room
        </h2>

        <Lightbulbs on={lightbulbs}/>

        <Switch callback={changer}/>
      </div>
    </>
  );
}

export default Room;
import { useState } from "react";
import classes from"./Lightbulb.module.scss";


function Lightbulb(props) {
  let toggle = "Toggle";

  const [isOn, setIsOn] = useState(true);

  function getButton(event) {
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





// import { React } from "react";
//   function App() { 
//     let saveData = () =>{ 
//       localStorage. setItem('Object 1', "test object"); 
//     } 

//   return ( <div> 
//     <button onClick={saveData}>Save! </button> 
//     </div> ); }
  
//   export default App;
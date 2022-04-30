import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import classes from "./MyName.module.scss";


function MyName() {

  const [name, setName] = useState("Namat");

  const onNameChange = event => setName(event.target.value);


  const [age, setAge] = useState(18);
  if (!age) {
    return (
      NaN
    );
  }
  else if(age === " ") {
    return(
      NaN
    );
  }

  const onAgeChange = event => setAge(event.target.value);

  return ( 
    <>
    <div className={classes.MyName}>
      
      <div className={classes.content}>
        <h2>
          My name is {name}, i am {age} years old.
        </h2>
        <input type="text" value={name} onInput={onNameChange}/>
        <input type="text" value={age} onInput={onAgeChange}/>
      </div>
    </div>
    </>
  );
}

export default MyName;
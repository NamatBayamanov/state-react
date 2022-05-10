import Burger from "./components/Burger/Burger";
import Double from "./components/Double/Double";
import Lightbulb from "./components/Lightbulb/Lightbulb";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import MyName from "./components/MyName/MyName";
import classes from "./App.module.scss";
import Theme from "./components/Theme/Theme";
// import { useState } from "react";



function App() {

  
  return (
    <div className={classes.App}>

      <Lightbulb/>
      <MyName/>
      <Double/>

      <Burger/>

      <MenuBurger />

      <Theme/>
    </div>
  );
}

export default App;

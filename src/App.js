import Burger from "./components/Double/Burger/Burger";
import Double from "./components/Double/Double";
import Lightbulb from "./components/Double/Lightbulb/Lightbulb";
import MenuBurger from "./components/Double/MenuBurger/MenuBurger";
import MyName from "./components/Double/MyName/MyName";
import classes from "./App.module.scss";
import Theme from "./components/Double/Theme/Theme";
import Room from "./components/Room";
// import { useState } from "react";



function App() {

  
  return (
    <div className={classes.App}>
      {/* <Lightbulb/>
      <MyName/>
      <Double/>

      <Burger/>

      <MenuBurger />
      <Theme/> */}

      <Room/>

    </div>
  );
}

export default App;

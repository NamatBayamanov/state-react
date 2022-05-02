import Burger from "./components/Burger/Burger";
import Double from "./components/Double/Double";
import Lightbulb from "./components/Lightbulb/Lightbulb";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import MyName from "./components/MyName/MyName";

function App() {
  return (
    <div className="App">
      <Lightbulb/>
      <MyName/>
      <Double/>

      <Burger/>

      <MenuBurger/>
    </div>
  );
}

export default App;

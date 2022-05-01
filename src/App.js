import Burger from "./components/Burger/Burger";
import Double from "./components/Double/Double";
import Lightbulb from "./components/Lightbulb/Lightbulb";
import MyName from "./components/MyName/MyName";

function App() {
  return (
    <div className="App">
      <Lightbulb/>
      <MyName/>
      <Double/>

      <Burger/>
    </div>
  );
}

export default App;

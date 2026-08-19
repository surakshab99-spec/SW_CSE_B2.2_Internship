import { Welcome } from "./components/p1";
import { ProductCard } from "./components/p2";
//import headphones from "./assets/sony.jpg";
import ButtonDemo from "./components/p3";
import Counter from "./components/stateexample1";
import ToggleText from"./components/state2";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <ToggleText/>
      
      <Welcome name="Suraksha" />

      <ButtonDemo />

      <ProductCard
          name="Sony ULT Wear Noise Cancellation Wireless Bluetooth Over Ear Headphones with Massive Bass"
        price={15999}
         image="https://m.media-amazon.com/images/I/610DB8Cwm7L._SY450_.jpg"
        //image={headphones}
      />
    </>
  );
}

export default App;
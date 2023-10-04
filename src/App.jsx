import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Middle from "./Components/Middle";
import MobileNav from "./Components/MobileNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <MobileNav/>
      <Middle />
    </>
  );
}

export default App;

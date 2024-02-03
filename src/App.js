import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { originals, action } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={action} title="Action" isSmall />
    </div>
  );
}

export default App;

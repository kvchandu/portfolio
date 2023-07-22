import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeaderSection from "./Components/HeaderSection";
import Education from "./Components/Education";
import Projects from "./Components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <HeaderSection />
      <Education />
      <Projects />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import About from "./pages/About";
import Tutor from "./pages/Tutor";

function App() {
  const storedName = localStorage.getItem('name')

  return (
    <div className="App">
      <nav className="nav-bar">
        <h3>{new Date().getHours() < 12 ? "Morning!" : "Hello~"}</h3>
        <Link to={"/"}>
          <h3>About</h3>
        </Link>
        <Link to={"/tutor"}>
          <h3>React tutorial</h3>
        </Link>
      </nav>
      <Banner
        text={`Welcome ${storedName||"Palowan"}. I am Suen, your React tour guide.`}
      ></Banner>
      <section>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="tutor" element={<Tutor />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

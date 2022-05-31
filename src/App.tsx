import { FormEvent, useContext, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import About from "./pages/About";
import Tutor from "./pages/Tutor";
import React from "react";
import { UserNameContext } from "./context/userNameContext";
import Home from "./pages/Home";
import TodoItem from "./components/TodoItem";
import TodoList from "./pages/TodoLsit";

function App() {
  const [name, setName] = useState<string | null>(localStorage.getItem("name"));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
    };
    const name = target.name.value;
    setName(name);
    if (name) localStorage.setItem("name", name);
  };

  const resetName = () => {
    setName(null);
    localStorage.removeItem("name");
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to={"/"}>
          <h2 className="logo">
            {new Date().getHours() < 12 ? "Morning!" : "Hello~"}
          </h2>
        </Link>
        <Link to={"/about"}>
          <h3>About</h3>
        </Link>
        <Link to={"/tutor"}>
          <h3>React tutorial</h3>
        </Link>
        <Link to={"/todo"}>
          <h3>To-Do List</h3>
        </Link>
      </nav>

      <header>
        <h1>Welcome {name || "Palowan"}. I am Suen, your React tour guide.</h1>
        {name ? (
          ""
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input
                type="text"
                placeholder="What's your name?"
                required
                name="name"
              ></input>
              <input type="submit"></input>
            </form>
          </>
        )}
      </header>

      <section className="main-content">
        <UserNameContext.Provider
          value={{ name: name || "Palowan", resetName }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/todo" element={<TodoList />} />
          </Routes>
        </UserNameContext.Provider>
      </section>
    </div>
  );
}

export default App;

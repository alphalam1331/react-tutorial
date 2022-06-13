import { FormEvent, useContext, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import { UserNameContext } from "./context/userNameContext";
import Home from "./pages/Home";
import {
  Testimonials,
  TestimonialsContext,
} from "./context/testimonialsContext";

function App() {
  const [name, setName] = useState<string>(
    localStorage.getItem("name") || "Palowan"
  );

  const handleSubmitName = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
    };

    const inputName = target.name.value;
    setName(inputName);
    if (inputName) localStorage.setItem("name", inputName);
  };

  const resetName = () => {
    setName("Palowan");
    localStorage.removeItem("name");
  };

  const { testimonials } = useContext(TestimonialsContext);
  const [testimonialList, setTestimonialList] =
    useState<Testimonials>(testimonials);

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
      </nav>

      {/* Banner */}
      <header>
        <h1>Welcome {name}. I am Suen, your React tour guide.</h1>
        {name === "Palowan" ? (
          <>
            <form
              onSubmit={handleSubmitName}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input
                type="text"
                name="name"
                placeholder="What's your name?"
                required
              ></input>
              <input type="submit"></input>
            </form>
          </>
        ) : (
          ""
        )}
      </header>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <div className="container">
          <UserNameContext.Provider value={{ name, resetName }}>
            <TestimonialsContext.Provider
              value={{
                testimonials: testimonialList,
                setTestimonials: setTestimonialList,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<About />} />
                <Route path="/tutor/" element={<Tutorial />} />
              </Routes>
            </TestimonialsContext.Provider>
          </UserNameContext.Provider>
        </div>
      </section>
    </div>
  );
}

export default App;

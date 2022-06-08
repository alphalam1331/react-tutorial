import { useContext } from "react";
import Card from "../components/Card";
import { TestimonialsContext } from "../context/testimonialsContext";
import { UserNameContext } from "../context/userNameContext";
import classes from "./Home.module.css";

export default function Home() {
  const { name, resetName } = useContext(UserNameContext);

  const { testimonials } = useContext(TestimonialsContext);

  return (
    <div className="container">
      <div>HIHI! User: {name}</div>
      <div>This is the Home page.</div>
      {name === "Palowan" ? (
        ""
      ) : (
        <button onClick={resetName}>Reset your name</button>
      )}
      <div className={classes["grid-box"]}>
        {testimonials.length > 0
          ? testimonials.map((item, index) => (
              <Card
                className="grid-item"
                key={index}
                index={index}
                title={item.title}
                content={item.content}
              ></Card>
            ))
          : "No Testimonials"}
      </div>
    </div>
  );
}

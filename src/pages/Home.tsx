import { useContext } from "react";
import Card from "../components/Card";
import { TestimonialsContext } from "../context/testimonialsContext";
import { UserNameContext } from "../context/userNameContext";
import classes from "./Home.module.css";
import TestimonialForm from "../components/TestimonialForm";

export default function Home() {
  const { name, resetName } = useContext(UserNameContext);

  const { testimonials } = useContext(TestimonialsContext);

  return (
    <>
      <div>HIHI! User: {name}</div>
      {name === "Palowan" ? (
        ""
      ) : (
        <button onClick={resetName}>Reset your name</button>
      )}
      <TestimonialForm></TestimonialForm>
      <div style={{height:"40rem", overflow:"auto", border:"1px solid grey", borderRadius:"10px"}}>
        <div>
          <h3>
            <u>The latest testimonial</u>
          </h3>
          <div>
            <h4>Title: </h4>
            <p>{testimonials[testimonials.length - 1].title}</p>
            <h4>Content: </h4>
            <p>{testimonials[testimonials.length - 1].content}</p>
          </div>
        </div>
        <div className={classes["grid-box"]}>
          {testimonials.map((item) => (
            <Card
              className="grid-item"
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
}

import { ReactNode, useContext, useState } from "react";
import { TestimonialsContext } from "../context/testimonialsContext";
import classes from "./Card.module.css";

export default function Card(props: {
  id: string;
  title: string;
  content: string;
  className?: string;
}) {
  //states
  const { id, title, content, className } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [thisTestimonial, setThisTestimonial] = useState({ title, content });

  const { testimonials, setTestimonials } = useContext(TestimonialsContext);

  //util functions
  const handleDelete = () => {
    setTestimonials
      ? setTestimonials(() => testimonials.filter((item) => item.id !== id))
      : false;
  };
  const handleUpdate = () => {
    const newList = testimonials;
    newList.forEach((item) => {
      if (item.id === id) {
        (item.title = thisTestimonial.title),
          (item.content = thisTestimonial.content);
      }
    });
    setTestimonials ? setTestimonials(newList) : false;
    setIsEditing(false);
  };

  //util buttons
  const toggleButton = (
    <button onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? "Cancel" : "Edit"}
    </button>
  );
  const deleteButton = <button onClick={handleDelete}>Delete</button>;
  const saveButton = <button onClick={handleUpdate}>Save</button>;

  return (
    <div className={className + " " + classes.card}>
      {isEditing ? (
        <>
          <form>
            <input
              type="text"
              value={thisTestimonial.title}
              onChange={(e) => {
                setThisTestimonial({
                  ...thisTestimonial,
                  title: e.target.value,
                });
              }}
            ></input>
            <textarea
              rows={20}
              cols={30}
              style={{ resize: "none" }}
              value={thisTestimonial.content}
              onChange={(e) =>
                setThisTestimonial({
                  ...thisTestimonial,
                  content: e.target.value,
                })
              }
            ></textarea>
          </form>
          {saveButton}
          {toggleButton}
        </>
      ) : (
        <>
          <h3>{thisTestimonial.title}</h3>
          <p>{thisTestimonial.content}</p>
          {deleteButton}
          {toggleButton}
        </>
      )}
    </div>
  );
}

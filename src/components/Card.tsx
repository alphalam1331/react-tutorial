import { ReactNode, useContext, useState } from "react";
import { TestimonialsContext } from "../context/testimonialsContext";
import classes from "./Card.module.css";

export default function Card(props: {
  index: number;
  title: string;
  content: string;
  className?: string;
}) {
  const { index, title, content, className } = props;

  const { testimonials, setTestimonials } = useContext(TestimonialsContext);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [thisTestimonial, setThisTestimonial] = useState({ title, content });

  const handleDelete = () => {
    if (testimonials) {
      const newTestimonials = testimonials.filter(
        (item) => item.title !== title
      );

      setTestimonials
        ? setTestimonials(newTestimonials)
        : console.log("setTestimonials is null");
    }
  };

  const handleUpdate = () => {
    const newTestimonialList = testimonials;
    newTestimonialList[index] = thisTestimonial;
    setTestimonials!(newTestimonialList);
    setIsEdit(false)
  };

  const deleteButton = <button onClick={handleDelete}>Delete</button>;
  const editButton = <button onClick={() => setIsEdit(!isEdit)}>Edit</button>;

  const cancelButton = <button onClick={() => setIsEdit(false)}>Cancel</button>;
  const saveButton = <button onClick={handleUpdate}>Save</button>;

  return (
    <div className={className + " " + classes.card}>
      {isEdit ? (
        <>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              value={thisTestimonial.title}
              onChange={(e) =>
                setThisTestimonial({
                  ...thisTestimonial,
                  title: e.target.value,
                })
              }
            ></input>
            <textarea
              rows={20}
              cols={30}
              style={{
                resize: "none",
              }}
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
          {cancelButton}
        </>
      ) : (
        <>
          <h3>{thisTestimonial.title}</h3>
          <p>{thisTestimonial.content}</p>
          {deleteButton}
          {editButton}
        </>
      )}
    </div>
  );
}

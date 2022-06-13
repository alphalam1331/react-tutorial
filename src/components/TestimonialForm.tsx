import { FormEvent, useContext, useState } from "react";
import {
  TestimonialsContext,
} from "../context/testimonialsContext";
import { UserNameContext } from "../context/userNameContext";

const TestimonialForm = () => {
  const { name } = useContext(UserNameContext);

  const { testimonials, setTestimonials } = useContext(TestimonialsContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };
    const id = "testimonial"+ Date.now();
    const title = target.title.value;
    const content = target.content.value;

    const newTestimonial = { id, title, content };
    
    console.log(newTestimonial.id);

    if (setTestimonials) setTestimonials([...testimonials, newTestimonial]);

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div>{name}'s Testimonials</div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title of your testimonial"
          onChange={(e) => setTitle(e.currentTarget.value)}
          required
        ></input>
        <textarea
          name="content"
          value={content}
          style={{
            resize: "none",
          }}
          cols={50}
          rows={6}
          placeholder="Put your words here"
          onChange={(e) => setContent(e.currentTarget.value)}
          required
        ></textarea>
        <input type="submit" value="Add" />
      </form>
      
    </>
  );
};

export default TestimonialForm;

import { FormEvent, useContext, useState } from "react";
import { TestimonialsContext } from "../context/testimonialsContext";
import { UserNameContext } from "../context/userNameContext";

const TestimonialPortal = () => {
  const { name } = useContext(UserNameContext);

  const [failure, setFailure] = useState<Boolean>(false);
  const { testimonials, setTestimonials } = useContext(TestimonialsContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      content: { value: string };
    };

    const title = target.title.value;
    const content = target.content.value;

    const newTestimonial = { title, content };

    try {
      if (setTestimonials) {
        setTestimonials([...testimonials, newTestimonial]);
        setFailure(false);
      } else {
        throw new Error("the function SetTestimonials is null");
      }
    } catch (error) {
      console.log(error);
      setFailure(true);
    }

    setTitle("");
    setContent("");
  };

  return (
    <>
      {failure ? (
        <div style={{ color: "red" }}>Something went wrong:(</div>
      ) : (
        ""
      )}
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
          cols={30}
          rows={10}
          placeholder="Put your words here"
          onChange={(e) => setContent(e.currentTarget.value)}
          required
        ></textarea>
        <input type="submit" value="Add" />
      </form>
      <div>
        <h2>
          <u>The latest testimonial</u>
        </h2>
        <div>
          <p>
            <h3>Title: </h3>
            {testimonials[testimonials.length - 1].title}
          </p>
          <p>
            <h3>Content: </h3>
            {testimonials[testimonials.length - 1].content}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialPortal;

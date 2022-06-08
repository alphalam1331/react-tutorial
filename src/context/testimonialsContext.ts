import { createContext } from "react";

type Testimonial = {
  id: string;
  title: string;
  content: string;
};
export type Testimonials = Array<Testimonial>;

const testimonials: Testimonials = [
  {
    id: "testimonial1",

    title: "This is Card 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial2",

    title: "This is Card 2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial3",

    title: "This is Card 3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial4",

    title: "This is Card 4",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial5",

    title: "This is Card 5",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial6",
    title: "This is Card 6",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial7",
    title: "This is Card 7",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial8",
    title: "This is Card 8",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial9",
    title: "This is Card 9",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial10",
    title: "This is Card 10",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial11",
    title: "This is Card 11",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial12",
    title: "This is Card 12",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial13",
    title: "This is Card 13",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial14",
    title: "This is Card 14",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial15",
    title: "This is Card 15",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    id: "testimonial16",
    title: "This is Card 16",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
];

export const TestimonialsContext = createContext<{
  testimonials: Testimonials;
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonials>> | null;
}>({ testimonials, setTestimonials: null });

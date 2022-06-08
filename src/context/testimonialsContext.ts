import { createContext } from "react";

type Testimonial = {
  title: string;
  content: string;
};
export type Testimonials = Array<Testimonial>;

const testimonials: Testimonials = [
  {
    title: "This is Card 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 4",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 5",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 6",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 7",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 8",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 9",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 10",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 11",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 12",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 13",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 14",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 15",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  },
  {
    title: "This is Card 16",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quas praesentium vel consectetur optio obcaecati, excepturi adipisci fugiat fugit, aperiam voluptas, numquam quam nobis? Accusantium perferendis dolorem eligendi et esse.",
  }
];

export const TestimonialsContext = createContext<{
  testimonials: Testimonials ;
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonials>> | null;
}>({ testimonials, setTestimonials: null });

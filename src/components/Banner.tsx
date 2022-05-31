import { Children } from "react";

export default function Banner(props: { text: string }) {
  const { text } = props;
  return (
    <header className="banner">
      <h1>{text}</h1>
    </header>
  );
}

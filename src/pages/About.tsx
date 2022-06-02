import { useContext } from "react";
import { UserNameContext } from "../context/userNameContext";

export default function About() {
  const { name } = useContext(UserNameContext);


  return (
    <>
      <div>This is the about page.</div>
      <div>What do you wanna know? {name}</div>
    </>
  );
}

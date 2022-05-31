import { useContext } from "react";
import { UserNameContext } from "../context/userNameContext";

export default function Home() {
    const {name, resetName} = useContext(UserNameContext)

  return (
    <>
      <div>This is the Home page.</div>
      <div>HIHI! User: {name}</div>
      <button onClick={resetName}>Reset your name</button>
      <div ></div>
    </>
  );
}

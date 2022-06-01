import { Link, Route, Routes } from "react-router-dom";
import ReactMarkDown from "react-markdown";

export default function Tutorial() {
  return (
    <>
      <div id="md-container">here</div>
      <div className="tab-bar">
        <Link to={"spa"}>Single Page App (SPA)</Link>
        <Link to={"start"}>Getting Started</Link>
        <Link to={"components"}>Components</Link>
        <Link to={"react-fiber"}>Life Cycle and React Fiber</Link>
        <Link to={"state-management"}>State management</Link>
        <Link to={"hooks"}>React hooks</Link>
        <Link to={"advance"}>Advance Usages</Link>
      </div>
    </>
  );
}

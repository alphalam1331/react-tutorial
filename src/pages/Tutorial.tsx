import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import getting_started_raw from "../assets/02_getting_started.txt";

export default function Tutorial() {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const rawText = await (await fetch(getting_started_raw)).text();
      setText(rawText);
    })();
  }, []);

  return (
    <>
      <div className="tab-bar">
        <Link to={"spa"}>Single Page App (SPA)</Link>
        <Link to={"start"}>Getting Started</Link>
        <Link to={"components"}>Components</Link>
        <Link to={"react-fiber"}>Life Cycle and React Fiber</Link>
        <Link to={"state-management"}>State management</Link>
        <Link to={"hooks"}>React hooks</Link>
        <Link to={"advance"}>Advance Usages</Link>
      </div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </>

  );
}

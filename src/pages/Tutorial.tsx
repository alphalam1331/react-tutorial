import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import spaRaw from "../assets/01_spa.txt";
import gettingStartedRaw from "../assets/02_getting_started.txt";
import componentsRaw from "../assets/03_components.txt";
import reactFiber_raw from "../assets/04_react_fiber.txt";
import stateManagementRaw from "../assets/05_state_management.txt";
import reactHooksRaw from "../assets/06_react_hooks.txt";
import advanceUsagesRaw from "../assets/07_advance_usages.txt";

const topics = [
  { title: "Single Page App (SPA)", textFile: spaRaw },
  { title: "Getting Started", textFile: gettingStartedRaw },
  { title: "Components", textFile: componentsRaw },
  {
    title: "React Fiber",
    textFile: reactFiber_raw,
  },
  { title: "State management", textFile: stateManagementRaw },
  { title: "React hooks", textFile: reactHooksRaw },
  { title: "Advance Usages", textFile: advanceUsagesRaw },
];

export default function Tutorial() {

  const [text, setText] = useState("");
  const [currentTopic, setCurrentTopic] = useState(topics[0].textFile);

  useEffect(() => {
    (async () => {
      const rawText = await (await fetch(currentTopic)).text();
      setText(rawText);
    })();
  }, [currentTopic]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const element = e.target as Element;

    if (element.matches(".tab")) {
      document
        .querySelectorAll(".tab")
        .forEach((e) => e.classList.remove("active"));
      element.classList.add("active");

      setCurrentTopic(() => {
        const temp = topics.filter(
          (topic) => topic.title === element.textContent
        );
        return temp[0].textFile;
      });
    }
  };

  return (
    <div className="container">
      <div className="tab-bar" onClick={(e) => handleClick(e)}>
        {topics.map((topic, index) => (
          <button key={index} className="tab">
            {topic.title}
          </button>
        ))}
      </div>
      <div>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

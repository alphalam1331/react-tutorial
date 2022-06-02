import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import spaRaw from "../assets/01_spa.txt";
import gettingStartedRaw from "../assets/02_getting_started.txt";
import componentsRaw from "../assets/03_components.txt";
import lifeCycleAndReactFiber_raw from "../assets/04_life_cycle_and_react_fiber.txt";
import stateManagementRaw from "../assets/05_state_management.txt";
import reactHooksRaw from "../assets/06_react_hooks.txt";
import advanceUsagesRaw from "../assets/07_advance_usages.txt";

export default function Tutorial() {
  const [text, setText] = useState("");
  const topics = [
    { title: "Single Page App (SPA)", rawText: spaRaw },
    { title: "Getting Started", rawText: gettingStartedRaw },
    { title: "Components", rawText: componentsRaw },
    {
      title: "Life Cycle and React Fiber",
      rawText: lifeCycleAndReactFiber_raw,
    },
    { title: "State management", rawText: stateManagementRaw },
    { title: "React hooks", rawText: reactHooksRaw },
    { title: "Advance Usages", rawText: advanceUsagesRaw },
  ];
  const [currentTopic, setCurrentTopic] = useState(topics[0].rawText);

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

      setCurrentTopic(()=>{
        const temp = topics.filter(topic=>topic.title === element.textContent)
        return temp[0].rawText
      })
    }
  };

  return (
    <div className="container">
      <div className="tab-bar" onClick={(e) => handleClick(e)}>
        {topics.map((topic, index) => (
          <button key={index} className="tab">{topic.title}</button>
        ))}
      </div>
      <div>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

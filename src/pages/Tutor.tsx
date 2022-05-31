import React from "react";
import TabButton from "../components/TabButton";

export default function Tutor() {
  return (
    <div className="tab-bar">
      <TabButton text="Single Page App (SPA)"></TabButton>
      <TabButton text="Getting Started"></TabButton>
      <TabButton text="Components"></TabButton>
      <TabButton text="Life Cycle and React Fiber"></TabButton>
      <TabButton text="State management"></TabButton>
      <TabButton text="React hooks"></TabButton>
      <TabButton text="Advance Usages"></TabButton>
    </div>

  );
}

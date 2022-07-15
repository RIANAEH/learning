import React from "react";

import './App.css';
import SimpleTimer from "./components/SimpleTimer/SimpleTimer";
import Title from "./components/Title/Title"

export default function App() {

  return (
    <div className="App">
      <Title>⏰ 페어 타이머 ⏰</Title>
      <SimpleTimer minutes='10'/>
    </div>
  );
}

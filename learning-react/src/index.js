import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PairTimer from "./pages/PairTimer/PairTimer";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="pair-timer" element={<PairTimer />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

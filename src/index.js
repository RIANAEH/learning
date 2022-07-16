import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MorakRoleSelector from "./pages/MorakRoleSelector/MorakRoleSelector";
import PairTimer from "./pages/PairTimer/PairTimer";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="pair-timer" element={<PairTimer />} />
      <Route path="morak-role-selector" element={<MorakRoleSelector />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

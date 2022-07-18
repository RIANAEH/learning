import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MorakRandomPicker from "./pages/MorakRandomPicker/MorakRandomPicker";
import MorakRoleSelector from "./pages/MorakRoleSelector/MorakRoleSelector";
import PairTimer from "./pages/PairTimer/PairTimer";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<App />} />
      <Route path="pair-timer" element={<PairTimer />} />
      <Route path="morak-role-selector" element={<MorakRoleSelector />} />
      <Route path="morak-random-picker" element={<MorakRandomPicker />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

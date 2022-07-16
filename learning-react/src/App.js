import { Link } from "react-router-dom";
import Title from "./components/Title/Title";
import "./App.css";

export default function App() {

  const buttonStyle = {
    margin: "5px", 
    padding: "3px 6px"
  }

  return (
    <div>
      <Title>안녕하세요👋, 엘리에요.</Title>
      <nav
        style={{
          paddingBottom: "1rem"
        }}
      >
        <button style={buttonStyle}>
          <Link to="/pair-timer">⏰ 페어 타이머</Link>
        </button>
        <button style={buttonStyle}>
          <Link to="/morak-role-selector">👑 모락 역할 정하기</Link>
        </button>
      </nav>
    </div>
  );
}

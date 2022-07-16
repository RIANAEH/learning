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
        <Link to="/pair-timer">
          <button style={buttonStyle}>
            ⏰ 페어 타이머
          </button>
        </Link>
        <Link to="/morak-role-selector">
          <button style={buttonStyle}>
            👑 모락 역할 정하기
          </button>
        </Link>
      </nav>
    </div>
  );
}

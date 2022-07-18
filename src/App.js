import { Link } from "react-router-dom";
import Title from "./components/Title/Title";
import "./App.css";
import Container from "./components/Container";
import Button from "./components/Button";

export default function App() {

  return (
    <div>
      <Title>안녕하세요👋, 엘리에요.</Title>
      <Container m='10px' f='15px'>
        아래 기능들을 이용해보세요.
      </Container>
      <nav
        style={{
          paddingBottom: "1rem"
        }}
      >
        <Link to="/pair-timer">
          <Button>⏰ 페어 타이머</Button>
        </Link>
        <Link to="/morak-role-selector">
          <Button>👑 모락 역할 정하기</Button>
        </Link>
        <Link to="/morak-random-picker">
          <Button>🎱 모락 랜덤 뽑기</Button>
        </Link>
      </nav>
    </div>
  );
}

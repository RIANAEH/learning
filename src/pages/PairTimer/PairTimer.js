import React from "react";

import './PairTimer.css';
import Title from "../../components/Title/Title"
import Countdown from "../../components/Countdown"
import Container from "../../components/Container"
import { Link } from "react-router-dom";

const PairTimer =  () => {

  return (
    <div>
      <Title>⏰ 페어 타이머 ⏰</Title>
      <div>
        <Countdown/>
      </div>
      <Container m='40px 0'>
        <Link to="/">🏡 홈으로</Link>
      </Container>
    </div>
  );
};

export default PairTimer;

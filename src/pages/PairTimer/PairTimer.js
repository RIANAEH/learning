import React from "react";

import './PairTimer.css';
import Title from "../../components/Title/Title"
import Countdown from "../../components/Countdown"
import { Link } from "react-router-dom";

const PairTimer =  () => {

  return (
    <div>
      <Title>⏰ 페어 타이머 ⏰</Title>
      <div>
        <Countdown/>
      </div>
      <Link style={{margin: '40px 0'}} to="/">🏡 홈으로</Link>
    </div>
  );
};

export default PairTimer;

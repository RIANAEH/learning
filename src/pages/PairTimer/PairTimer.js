import React from "react";

import './PairTimer.css';
import Title from "../../components/Title/Title"
import Countdown from "../../components/Countdown"

const PairTimer =  () => {

  return (
    <div>
      <Title>⏰ 페어 타이머 ⏰</Title>
      <div>
        <Countdown/>
      </div>
    </div>
  );
};

export default PairTimer;

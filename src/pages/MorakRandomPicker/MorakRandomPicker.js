import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title/Title";

const MorakRandomPicker = () => {

    const members = ['차리', '배카라', '엘리', '위니', '앨버', '에덴'];
    
    const [ pickedMembers, setPickedMembers ] = useState([]);
    const [ number, setNumber ] = useState(1);

    const pick = () => {
        const suffledMembers = shuffle(members);
        setPickedMembers(suffledMembers.slice(0, number));
    };

    /* 출처: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    };

    return (
        <div>
            <Title>🎱 모락 랜덤 뽑기 🎱</Title>
            <Container m='10px 0' f='15px'>
                선택하기 어렵다면 랜덤으로 뽑아보세요🍀
            </Container>
            <Container m='10px 0'>
                <input 
                    style={{fontSize: '20px'}}
                    type='number'
                    min={1}
                    max={59}
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <Button onClick={pick}>🧨 뽑기</Button>
            </Container>
            <Container m='10px 0'>
                {pickedMembers.length != 0? pickedMembers.join(', ') : ''}
            </Container>
            <Container m='40px 0'>
                <Link to="/">🏡 홈으로</Link>
            </Container>
        </div>
    )
}

export default MorakRandomPicker;

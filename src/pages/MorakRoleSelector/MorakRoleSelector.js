import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title/Title";

const MorakRoleSelector = () => {

    const members = ['차리', '배카라', '엘리', '위니', '앨버', '에덴'];
    const roles = ['반장👑', '서기✍️', '타임키퍼⏳', '카메라맨📸', '이슈관리✅', '공석🍼'];
    const [sequences, setSequences] = useState([]);

    useEffect(() => {
        const date = new Date().getDate();
        const chaleeSequence = date % members.length;
        setSequences(members.slice(-chaleeSequence).concat(members.slice(0, -chaleeSequence)));
    }, []);

    return (
        <div>
            <Title>👑 모락 역할 정하기 👑</Title>
            <Container m='10px 0' f='15px'>
                오늘 하루도 우하하~~😄
            </Container>
            <Container m='10px 0'>
                {roles.map((role, index) => {
                    return <div>{role}: {sequences[index]}</div>;
                })}
            </Container>
            <Container m='40px 0'>
                <Link to="/">🏡 홈으로</Link>
            </Container>
        </div>
    )
};

export default MorakRoleSelector;
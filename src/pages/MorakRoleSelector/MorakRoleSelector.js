import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

const MorakRoleSelector = () => {

    const members = ['차리', '배카라', '엘리', '위니', '앨버', '에덴'];
    const roles = ['반장👑', '서기✍️', '타임키퍼⏳', '공석🐥', '이슈관리✅', '공석🍼'];
    const [sequences, setSequences] = useState([]);

    useEffect(() => {
        const date = new Date().getDate();
        const chaleeSequence = date % 6 - 1;
        setSequences(members.slice(6 - chaleeSequence).concat(members.slice(0, 6 - chaleeSequence)));
    }, []);

    return (
        <div>
            <Title>👑 모락 역할 정하기 👑</Title>
            <div style={{margin: '40px 0'}}>
                {roles.map((role, index) => {
                    return <div>{role}: {sequences[index]}</div>;
                })}
            </div>
            <Link style={{margin: '40px 0'}} to="/">🏡 홈으로</Link>
        </div>
    )
};

export default MorakRoleSelector;
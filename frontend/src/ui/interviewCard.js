import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './interviewCard.module.css';

const InterviewCard = (props) => {
    const navigate = useNavigate();

    const editHandler = (e) => {
        e.preventDefault();
        navigate('/interviewForm', {state: {data: props.interview, edit: true}, });
    }

    return (
        <div className={styles.card}>
            <h3>{props.interview.title}</h3>
            <h3>{props.interview.startTime}</h3>
            <h4>{props.interview.endTime}</h4>
            {props.interview.participants.map((element) => {
                return <p>{element.name}</p>
            })}
            <button onClick={editHandler}>Edit</button>
        </div>
    );
}

export default InterviewCard;
import React from "react";

import styles from './interviewCard.module.css';

const InterviewCard = (props) => {

    props.interview.participants.forEach((e) => {
        console.log(e.name);
    })

    return (
        <div className={styles.card}>
            <h3>{props.interview.title}</h3>
            <h3>{props.interview.startTime}</h3>
            <h4>{props.interview.endTime}</h4>
            {props.interview.participants.map((element) => {
                return <p>{element.name}</p>
            })}
        </div>
    );
}

export default InterviewCard;
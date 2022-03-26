import React, { useEffect, useState } from "react";

import InterviewCard from "../ui/interviewCard";

const InterviewList = () => {
    const [interviewList, setInterviewList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/interview')
        .then(response => response.json())
        .then(data => {
            setInterviewList(data.interviewList);
            setIsLoading(false);
            console.log(data.interviewList);
        });
    }, []);

    return (
        <div>
            <h2>Upcoming Interviews</h2>
            {!isLoading && interviewList.map((val) => {
                return <InterviewCard interview={val}></InterviewCard>
            })}
        </div>
    );
}

export default InterviewList;
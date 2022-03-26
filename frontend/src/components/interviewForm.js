import React, { useState, useEffect } from "react"; 
import Select from "react-select";
import makeAnimated from "react-select/animated";

import classes from './interviewForm.module.css'

const InterviewForm = () => {
    const [participantData, setParticipantData] = useState([]);
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const animatedComponents = makeAnimated();

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/participant')
        .then(response => response.json())
        .then(data => {
            setParticipantData(data.participantList);
            setIsLoading(false);
        });
    }, []);

    const getOptions = (data) => {
        const options = [];
        for(let d of data) {
            options.push({label: d.name, value: d._id});
        }
        return options;
    }

    const onChangeHandler = (selectedOptions) => {
        const selectedIds = [];
        selectedOptions.forEach((element) => {
            selectedIds.push(element.value);
        })
        setSelectedParticipants(selectedIds);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let data = JSON.stringify({
            "title": title,
            "startTime": startTime,
            "endTime": endTime,
            "participants": selectedParticipants
        })

        console.log(data);

        const url = "http://localhost:8080/api/v1/interview/";
        
        try {
            const rawResponse = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: data,
                crossDomain: true,
            });
            const response = await rawResponse.json();
            console.log(response);

        } catch (error) {
            
        }
    }

    return (
        <div>
            {!isLoading && <form>
                <label for="title">
                    Title 
                    <input  type="text" id="title" name="title" onChange={event => setTitle(event.target.value)}></input>
                </label><br />

                <label for="startTime">
                    Start time 
                    <input  type="datetime-local" id="startTime" name="startTime" onChange={event => setStartTime(event.target.value)}></input>
                </label><br />

                <label for="endTime">
                    End Time<input type="datetime-local" id="endTime" name="endTime" onChange={event => setEndTime(event.target.value)}></input>
                </label><br/>

                <label for="participants">
                    Select Participants
                    <Select
                        isMulti
                        closeManeOnSelect={false}
                        components={animatedComponents}
                        name="candiates"
                        options={getOptions(participantData)}
                        className={classes.options}
                        classNamePrefix="select"
                        onChange={(selectedOptions) => {
                            onChangeHandler(selectedOptions);
                        }}
                    />
                </label> <br />
                <button onClick={onSubmitHandler}>create</button>
            </form>}
        </div>
    );
}

export default InterviewForm;
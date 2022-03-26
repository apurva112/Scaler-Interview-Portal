import React from "react";

import Header from './components/header'
import InterviewList from "./components/interviewList";

const Home = () => {
    return (
        <div className="App">
            <Header></Header>
            <InterviewList></InterviewList>
        </div>
    );
}

export default Home;
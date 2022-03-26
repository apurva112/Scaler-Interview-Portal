import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home'
import InterviewForm from './components/interviewForm';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/createInterview" element={<InterviewForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;



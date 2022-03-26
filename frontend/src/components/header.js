import {React } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const createInterview = (e) => {
        e.preventDefault();
        navigate('/createInterview', {state: {data: {}, edit: false}, });
    }

    return(
        <div>
            <h1>Hello Admin</h1>
            <button onClick={createInterview}>Create Interview</button>
        </div>
    );
}

export default Header;
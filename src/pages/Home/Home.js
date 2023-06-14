import React from "react";

import BabySVG from "../../components/Baby/Baby";
import Form from "../../components/Form/Form";

import './Home.css';

const Home = () => {
    return (
        <div className="parent">
            <div className="inner">
                <BabySVG />
            </div>
            <div className="inner">
                <Form />
            </div>
            <div className="inner">
                <BabySVG />
            </div>
        </div>
    )   
}

export default Home;
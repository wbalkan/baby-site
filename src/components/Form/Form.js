import React from "react";

import { useState } from "react";

import './Form.css';

const Form = () => {

    async function getRandomName(e) {
        // e.preventDefault();

        let randomName = '';

        const response = await fetch('https://randommer.io/api/Name?nameType=firstname&quantity=1', {
            headers: {
                'X-Api-Key': 'adf5d3da00654a61aa3089d6b08a382e'
            }
        }
        
        )
          .then(response => response.json())
          .then(data => {
            console.log('data');
            console.log(data);
            const randomName = data[0];
            changeName(randomName);
          })
          .catch(error => {
            console.error('Error:', error);
            return 'badname';
          });

          return randomName;

        
    }


    const [babyName, changeName] = useState("");

    return (
        <div className="main">
            <h1 className="title">Name Your Baby!</h1>
            <button onClick={getRandomName}>Generate your name!</button>
            <h3 className="reveal">Name: {babyName}</h3>
        </div>
    )
}



export default Form;
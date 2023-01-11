import React from "react";
import {useState} from 'react';



export default function Url1() {

  const [startTime1, setStartTime1] = useState(null);
  const [endTime1, setEndTime1] = useState(null);  
  const [savestartTime1, setsaveStartTime1] = useState(null);
  const [saveendTime1, setsaveEndTime1] = useState(null);  
  const [data, setData] = useState(null);

  const handleClick1 = () => {
    setStartTime1(new Date());
    setsaveStartTime1(new Date());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setEndTime1(new Date());
        localStorage.setItem('data',JSON.stringify(data))
        setsaveEndTime1(new Date());
          setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
    return (
           
          <div>
          Start Time : {Math.floor(savestartTime1)} <br/> <br/>
          End Time : {Math.floor(saveendTime1)} <br/> <br/>
          Saving Start Time : {Math.floor(startTime1)} <br/> <br/>
          Saving End Time : {Math.floor(endTime1)} <br/> <br/>
          <button onClick={handleClick1}>Fetch and Save Data for Comments</button>
        </div> 
        
   
    );
  }
 
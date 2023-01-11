import React from "react";
import {useState} from 'react';



export default function Url4() { 

  const [startTime4, setStartTime4] = useState(null);
  const [endTime4, setEndTime4] = useState(null);  
  const [savestartTime4, setsavestartTime4] = useState(null);
  const [saveendTime4, setsaveEndTime4] = useState(null);  
  const [data, setData] = useState(null);

  const handleClick4 = () => {
    setStartTime4(new Date());
    setsavestartTime4(new Date());
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setEndTime4(new Date());
        localStorage.setItem('data',JSON.stringify(data))
        setsaveEndTime4(new Date());
          setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return(
    <div>
    Start Time : {Math.floor(savestartTime4)} <br/> <br/>
    End Time : {Math.floor(saveendTime4)} <br/> <br/>
    Saving Start Time : {Math.floor(startTime4)} <br/> <br/>
    Saving End Time : {Math.floor(endTime4)} <br/> <br/>
    <button onClick={handleClick4}>Fetch and Save Data for Todos</button>

    </div>
  )






}
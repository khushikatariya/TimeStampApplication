import React from "react";
import {useState} from 'react';

export default function Url2(){

const [startTime2, setStartTime2] = useState(null);
const [endTime2, setEndTime2] = useState(null);  
const [savestartTime2, setsavestartTime2] = useState(null);
const [saveendTime2, setsaveEndTime2] = useState(null); 
const [data, setData] = useState(null);

const handleClick2 = () => {
    setStartTime2(new Date());
    setsavestartTime2(new Date());
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setEndTime2(new Date());
        localStorage.setItem('data',JSON.stringify(data))
        setsaveEndTime2(new Date());
          setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return(
    <div>
        
        Start Time : {Math.floor(savestartTime2)} <br/> <br/>
        End Time : {Math.floor(saveendTime2)} <br/> <br/>
        Saving Start Time : {Math.floor(startTime2)} <br/> <br/>
        Saving End Time : {Math.floor(endTime2)} <br/> <br/>
        <button onClick={handleClick2}>Fetch and Save Data for Posts</button>
        
    </div>

  )


}
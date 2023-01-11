import React from "react";
import {useState} from 'react';



export default function Url3() {

  const [startTime3, setStartTime3] = useState(null);
  const [endTime3, setEndTime3] = useState(null);  
  const [savestartTime3, setsavestartTime3] = useState(null);
  const [saveendTime3, setsaveEndTime3] = useState(null);  
  const [data, setData] = useState(null);

  const handleClick3 = () => {
    setStartTime3(new Date());
    setsavestartTime3(new Date());
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setEndTime3(new Date());
        localStorage.setItem('data',JSON.stringify(data))
        setsaveEndTime3(new Date());
          setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
    
  
  return(
    <div>
    Start Time : {Math.floor(savestartTime3)} <br/> <br/>
    End Time : {Math.floor(saveendTime3)} <br/> <br/>
    Saving Start Time : {Math.floor(startTime3)} <br/> <br/>
    Saving End Time : {Math.floor(endTime3)} <br/> <br/>
    <button onClick={handleClick3}>Fetch and Save Data for Photos</button>
    </div>
  )




}

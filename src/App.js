
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Url1 from './components/url1';
import Url2 from './components/url2';
import Url3 from './components/url3';
import Url4 from './components/url4';


function App() {

return (
<div className='screen'>
<div className='container'>
<h1 align='center'>Time App</h1> <br/> <br/>
<div align='center' className='row'>
    <div className='col'>
    <Url1/>
    </div>
    <br/><br/>
  <div align='center' className='col'>
  <Url2 />
  </div>
  <div className='w-100'></div>
  <br/><br/>
  <div align='center' class='col'>
  <Url3 />
  </div>
  <br/><br/>
  <div align='center' class='col'>
  <Url4 />
  </div>
</div>
</div>
</div>

)
}
export default App 
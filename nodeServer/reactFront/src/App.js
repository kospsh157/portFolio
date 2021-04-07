import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';




function App() {
  const [value1, setValue1] = useState('It is String');
  let res = '';
  useEffect( async () => {
    try {
      res = await axios.post('/api/world', {
        data1: value1
      });
    } catch (err) {
      console.error(err);
    }

    // Received data from nodeServer is received in this way.
    console.log(res.data);
    const resData = JSON.parse(res.data);
    
    console.log(resData);

   
    return () => { 
      
    }
  },[])

  
  
  
  return (
    <div className="App">
      <div>
        <button onClick={()=>setValue1('OH you click!')}> {res.data + '하하' + value1} </button>
      </div>
    </div>
  );
}

export default App;
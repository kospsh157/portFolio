import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


// 컴포넌트에 들어가는 변수는 컴포넌트 밖으로 빼자.
let resultData = 'firstData';

function App() {
  const [value1, setValue1] = useState('It is Default.');
  // You can use loading state like this. 
  // it can be using like flag option.
  // const [isLoading, setLoading] = useState('true');

  useEffect(() => {
    axios.post('/api/test', {
      data1: value1,
      data2: '통신은 단순한 객체형태나 문자열만 보낼 수 있다.',
      data3: setValue1, // 함수 같이 큰거는 안보내진다. 함수를 가지고 통신할 순 없다.
    }).then((res) => {
      setValue1(res.data);
    }).catch((err) => {
      console.log('React : Error From useEffet() : ');
      console.error(err);
    })
    return () => {
      
    }
  }, [])
  
  // if you use loading state, you should add below
  // if(loading) {
  //   return (
  //   <div className="App">
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   </div>
  //   )
  // }
  
  return (
    <div className="App">
      <div>
        <button onClick={()=>setValue1('OH you click!')}> {'하하' + value1} </button>
      </div>
    </div>
  );
}

export default App;
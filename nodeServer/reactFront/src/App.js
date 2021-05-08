import {useState, useEffect} from 'react';
import styled from 'styled-components';
import TopAndFooter from './components/presentational/TopAndFooter';
import VerticalLine from './components/presentational/VerticalLine';

// import Compoents Top and Footer
const [TopNevi, TopBody, FooterNavi, FooterBody] = TopAndFooter;


function App() {
    
  return (
    <div className="App">
      <TopNevi/>
      <TopBody/>
      <div>
        하
        <br />
        하
        <br />
        하
        <br />
        하
        <br />
        하 
        <br />




      </div>





      <FooterBody>
        <div style={{
          width: '80vw',
          height: '10vh',
          padding: 0,
          borderRight: '4px solid black',
          borderLeft: '4px solid black',
          boxSizing: 'border-box',
          margin: '0px 2vw 0 2vw'
        }}>
          <p>Copyright 2021. SungHo Park All rights reserved</p>
        </div>
        
      </FooterBody>
      
      <FooterNavi/>
    </div>
  );
}

export default App;
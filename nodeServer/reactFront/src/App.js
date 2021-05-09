import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TopAndFooter from './components/presentational/TopAndFooter';
import VerticalLine from './components/presentational/VerticalLine';
import SideMenu from './components/presentational/SideMenu';

// import Compoents Top and Footer
const [TopNevi, TopBody, FooterNavi, FooterBody] = TopAndFooter;


function App() {
    
  return (
    <>
      <TopNevi/>
      <TopBody>
        Wellcome My Resume
      </TopBody>

      <SideMenu/>
      <div style={{float: 'left', width: '83vw', height: '70vh', padding:'0', margin: '0'}}>
        바디가 있어야 할 부분
      </div>











      <FooterNavi/>

      <FooterBody>
        {/* inline css start point*/}
        <div style={{
          width: '80vw',
          height: '10vh',
          padding: 0,
          borderRight: '2px solid black',
          borderLeft: '2px solid black',
          boxSizing: 'border-box',
          display: 'inline-block',
          // margin: '0px 1vw 0 1vw'
        }}>
        {/* inline css end point*/}
          <p style={{fontSize: '1.5rem'}}>Copyright 2021. SungHo Park All rights reserved</p>
        </div>
      </FooterBody>
    </>
  );
}

export default App;
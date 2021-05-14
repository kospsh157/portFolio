import React, {useState, useEffect} from 'react';
import TopAndFooter from './components/presentational/TopAndFooter.jsx';
import SideMenu from './components/presentational/Menu.jsx';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import BodyHome from './components/presentational/BodyHome.jsx';
import BodyMyInfo from './components/presentational/BodyMy.jsx';
import BodyServerInfo from './components/presentational/BodyServer.jsx';
import BodyFrontInfo from './components/presentational/BodyFront.jsx';
import BodyApi from './components/presentational/BodyApi.jsx';
import BodyStyled from './components/presentational/BodyStyled.jsx';

// import Compoents Top and Footer
const [TopNevi, TopBody, FooterNavi, FooterBody] = TopAndFooter;


function App() {
    
  return (
    <>
      
      <TopBody>
        Wellcome My Resume
      </TopBody>


      <BrowserRouter>
        <SideMenu/>
        {/* <div style={{float: 'left', width: '90vw', height: '75vh', padding:'0', margin: '0', backgroundColor: '#000000'}}/> */}
        <Route exact path='/' component={BodyHome} />
        <Route path='/myinfo' component={BodyMyInfo} />
        <Route path='/serverinfo' component={BodyServerInfo} />
        <Route path='/frontinfo' component={BodyFrontInfo} />
        <Route path='/api' component={BodyApi} />
        



      </BrowserRouter>


      <FooterBody>
          <p style={{fontSize: '0.7rem'}}>Copyright 2021. SungHo Park All rights reserved</p>
      </FooterBody>
    </>
  );
}

export default App;
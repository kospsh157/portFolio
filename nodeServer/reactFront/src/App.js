import React, { useState, useEffect, useRef } from 'react';
import TopAndFooter from './components/presentational/TopAndFooter.jsx';
import SideMenu from './components/presentational/SideMenu.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import BodyHome from './components/presentational/BodyHome.jsx';
import BodyMyInfo from './components/presentational/BodyMyInfo.jsx';
import BodyServer from './components/presentational/BodyServer.jsx';
import BodyFront from './components/presentational/BodyFront.jsx';
import BodyApi from './components/presentational/BodyApi.jsx';
import MenuButton from './components/presentational/customTags/MenuButton.jsx';

// import Compoents Top and Footer
const [TopBody, FooterBody] = TopAndFooter;


function App() {
  

  return (
    <>
      <TopBody>
        <MenuButton />
        Wellcome My Resume
      </TopBody>

      
      <BrowserRouter>
        <SideMenu  toggle = { 'inline' }/>
        <Route exact path='/' component={BodyHome} />
        <Route path='/myinfo' component={BodyMyInfo} />
        <Route path='/serverinfo' component={BodyServer} />
        <Route path='/frontinfo' component={BodyFront} />
        <Route path='/api' component={BodyApi} />
      </BrowserRouter>

      <FooterBody>
          <p>Copyright 2021. SungHo Park All rights reserved</p>
      </FooterBody>
    </>
  );
}

export default App;
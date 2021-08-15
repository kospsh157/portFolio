import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopAndFooter from './components/TopAndFooter.jsx';
import SideMenu from './components/SideMenu.jsx';
import BodyHome from './components/BodyHome.jsx';
import BodyMyInfo from './components/BodyMyInfo.jsx';
import BodySiteInfo from './components/BodySiteInfo.jsx';
import BodyBoard from './components/BodyBoard.jsx';
import MenuButton from './components/customTags/MenuButton.jsx';
import Err404Page from './components/ErrComponents/Err404Page.jsx';
import BodyChat from './components/BodyChat.jsx';


// import Compoents Top and Footer
const [TopBody, FooterBody] = TopAndFooter;

function App() {
  // state of menuButton
  const [menuButton, setMenuButton] = useState('none');
  const clickMenuButton = () => {
    if(menuButton !== 'none') {
      return setMenuButton('none');
    }else{
      return setMenuButton('inline');
    }
  };

  return (
    <>
      <TopBody>
        <MenuButton funcData = {clickMenuButton} />
        Wellcome My Resume
      </TopBody>
    
      <BrowserRouter>
        <SideMenu toggle = {menuButton} />
        <Switch>
          <Route exact path = '/' component = {BodyHome} />
          <Route exact path = '/myinfo' component = {BodyMyInfo} />
          <Route exact path = '/siteinfo' component = {BodySiteInfo} />
          <Route exact path = '/board'  component = {BodyBoard} />
          <Route exact path = '/livechat'  component = {BodyChat} />
          
          <Route component = {Err404Page} />
        </Switch>
      </BrowserRouter>

      <FooterBody>
          <p>Copyright 2021. SungHo Park All rights reserved</p>
      </FooterBody>
    </>
  );
}

export default App;
import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopAndFooter from './components/TopAndFooter.jsx';
import SideMenu from './components/SideMenu.jsx';
import BodyHome from './components/BodyHome.jsx';
import BodyMyInfo from './components/BodyMyInfo.jsx';
import BodySiteInfo from './components/BodySiteInfo.jsx';
import BodyBoard from './components/BodyBoard.jsx';
import MenuButton from './components/customTags/MenuButton.jsx';
import ErrPage from './components/ErrComponents/ErrPage.jsx';
import Err404Page from './components/ErrComponents/Err404Page.jsx';



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

  // clickMenuButton을 만들면서 배운 점 
  /*
    1. 리액트 메인 app에서는 각각의 자식 컴포넌트에게 onCick 이벤트를 달 수 없다. 오직 props만 전달 가능할 뿐이다.
    >> 그게 아니라, 사실 커스텀 컴포넌트에는 이벤트를 달 수 없다. props만을 전달해서 내부에서 이벤트를 달 수 있다.
    >> app에서도 기본으로 제공되는 엘레먼트에는 이벤트를 달 수 있다.
    2. 함수를 만들어서 자식에게 props로 전달하여 얼마든지 부모의 상탯값을 컨트롤 할 수 있다.
    3. onClick 이벤트의 콜백함수를 정의할 때, 그 콜백함수의 파라미터를 정의해놓고 실제로는 아무것도 전달해주지 않는다면, 자동으로 클릭 이벤트 객체가
    그 파라미터로 들어간다.
    4. if문 안에 return 키워드로 끝내면서 상탯값함수를 콜하는것이 나은지, 아니면 return키워드 없이 그냥 호출하는게 나은지는 
    불명확하다. 다만 지금은 return키워드를 붙여주어서 본 함수를 끝내면서 상탯값함수를 콜하는게 더 좋지 않을까 생각한다.
  */


    // ErrorHandler
    /*
      1. 에러 핸들러는 리액트 돔을 사용하므로, 반드시 라우터 안에 들어가야 한다.
      2. {children}를 이용하면 하위 컴포넌트들이 배열에 담겨서 나온다.
    */

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
          <Route exant path = '/err/:code' component = {ErrPage} />
          
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
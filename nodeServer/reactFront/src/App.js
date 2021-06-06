import React, {useState, useEffect, useRef} from 'react';
import TopAndFooter from './components/presentational/TopAndFooter.jsx';
import SideMenu from './components/presentational/SideMenu.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import BodyHome from './components/presentational/BodyHome.jsx';
import BodyMyInfo from './components/presentational/BodyMyInfo.jsx';
import BodySiteInfo from './components/presentational/BodySiteInfo.jsx';
import BodyBoard from './components/presentational/BodyBoard.jsx';
import MenuButton from './components/presentational/customTags/MenuButton.jsx';

// import Compoents Top and Footer
const [TopBody, FooterBody] = TopAndFooter;

function App() {

  // state of menuButton
  const [menuButton, setMenuButton] = useState('none');
  const clickMenuButton = () => {
    console.log(menuButton);
    if(menuButton !== 'none') {
      return setMenuButton('none');
    }else{
      return setMenuButton('inline');
    }
  };

  // clickMenuButton을 만들면서 배운 점 
  /*
    1. 리액트 메인 app에서는 각각의 자식 컴포넌트에게 onCick 이벤트를 달 수 없다. 오직 props만 전달 가능할 뿐이다.
    2. 함수를 만들어서 자식에게 props로 전달하여 얼마든지 부모의 상탯값을 컨트롤 할 수 있다.
    3. onClick 이벤트의 콜백함수를 정의할 때, 그 콜백함수의 파라미터를 정의해놓고 실제로는 아무것도 전달해주지 않는다면, 자동으로 클릭 이벤트 객체가
    그 파라미터로 들어간다.
    4. if문 안에 return 키워드로 끝내면서 상탯값함수를 콜하는것이 나은지, 아니면 return키워드 없이 그냥 호출하는게 나은지는 
    불명확하다. 다만 지금은 return키워드를 붙여주어서 본 함수를 끝내면서 상탯값함수를 콜하는게 더 좋지 않을까 생각한다.
  */

  return (
    <>
      <TopBody>
        <MenuButton funcData = {clickMenuButton} />
        Wellcome My Resume
      </TopBody>
      
      <BrowserRouter>
        <SideMenu toggle = {menuButton} />
        <Route exact path = '/' component={BodyHome} />
        <Route path = '/myinfo' component={BodyMyInfo} />
        <Route path = '/siteinfo' component={BodySiteInfo} />
        <Route path = '/board' component={BodyBoard} />
      </BrowserRouter>

      <FooterBody>
          <p>Copyright 2021. SungHo Park All rights reserved</p>
      </FooterBody>
    </>
  );
}

export default App;
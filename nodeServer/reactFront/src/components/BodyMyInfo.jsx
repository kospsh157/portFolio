import { useRef } from 'react';
import styled from 'styled-components';
import BodyStyled from './BodyStyled';
import CustomLink from './customTags/CustomLink.jsx';
import StickyDiv from './customTags/StickyDiv.jsx';

// StyledComponent, can be empty, this means nothing special to add.
const MyInfoStyled = styled(BodyStyled)`
`;

function BodyMyInfo({menuClick}) {
    const myInfo = useRef();
    
    return(
        <MyInfoStyled ref = {myInfo}>
            <StickyDiv text = '-MyInfo-' parent = {myInfo} />
            <h3>Diploma in Korea</h3>
                <p>I graduated from the Department of WebIT at Shingu College, Korea.</p>
                <CustomLink to = {{pathname: 'https://english.shingu.ac.kr/index.do'}}
                    target = '_blank'
                >
                Here! ShinGu College WebSite
                </CustomLink>              
                <br /><br />               
                <img src = '/images/myDiploma.png' 
                    alt = 'myDiplomaPaperImage'
                    width = '70%'
                    height = 'auto'
                />
            <br /><br /><br /><br />
            <h3>About me</h3>
                <p>
                I have been immigrating from Korea to Canada for about 8 months.
                <br />
                I am also a permanent resident of Canada.
                <br /><br />
                Just before immigrating to Canada, 
                <br />
                I had a month of internship experience as a novice front-end developer in Korea.
                <br />
                At that time, I used Java(Spring framework), MariaDB, Tomcat and React.js.
                <br /><br />
                Besides web development, I have a lot of background knowledge. Especially for health and food.
                <br />
                I think this knowledge is very important.
                <br />
                Only when you are healthy, you can focus on your work.

                <br /><br />
                I'm currently learning English diligently. This is what I think is the weakest point.
                <br />               
                I know simple life conversation and work terms. 
                <br />
                However, it is true that it is very difficult using English.
                <br />
                So I study English every day.
                </p>               
            <br /><br /><br /><br />
            <h3>Skills</h3>
                {/* 각각 div를 만들어준 이유 : 패딩값을 줘서 이미지 사이 간격을 일정하게 주기 위함이다. */}
                <div style = {{paddingRight: '2vw', display: 'inline-block', width: '10vw'}}>
                    <img src = '/images/javascript.png'
                        alt = 'I can use javascript' 
                        width = '100%'
                    />
                </div>
                <div style = {{paddingRight: '2vw', display: 'inline-block', width: '10vw'}}>
                    <img src = '/images/typescript.png' 
                        alt = 'I can use typescript'
                        width = '100%'
                    />
                </div>
                <div style = {{paddingRight: '2vw', display: 'inline-block', width: '10vw'}}>
                    <img src = '/images/react.png' 
                        alt = 'I can use React' 
                        width = '100%'
                    />
                </div>
                <div style = {{paddingRight: '2vw', display: 'inline-block', width: '10vw'}}>
                    <img src = '/images/nodejs.png' 
                        alt = 'I can use nodeJS' 
                        width = '100%'
                    />
                </div>
                <div style = {{paddingRight: '2vw', display: 'inline-block', width: '10vw'}}>
                    <img src = '/images/AWS.png' 
                        alt = 'I can use AWS' 
                        width = '100%'
                    />
                </div>
                <br /><br />
                <p>
                    I want to work on Node Backend, but it's OK with React Front too.
                    <br />
                    But I'm not a good full-stack developer. I am a just novice developer.
                    <br /><br />
                    I mostly develop on Mac.
                    <br />
                    But I know how to use Linux a little.
                    <br />
                    Of course I can also develop on windows.
                </p>
                <br /><br /><br /><br />
        </MyInfoStyled>
    );
}

export default BodyMyInfo;
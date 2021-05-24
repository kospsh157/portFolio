import { useRef, useState } from 'react';
import styled from 'styled-components';
import BodyStyled from './BodyStyled';
import CustomLink from './customTags/CustomLink.jsx';
import StickyDiv from './customTags/StickyDiv.jsx';

const MyInfoStyled = styled(BodyStyled)`
   

`;

function BodyMyInfo({ menuClick }) {
    const body = useRef();
    
    return(
        <MyInfoStyled ref = { body }>
            <StickyDiv text = '-MyInfo-' parent = { body }/>
            <h3>Diploma in Korea</h3>
                <p>I graduated from ShinGu College in Korea.</p>
                <CustomLink to = {{ pathname: 'https://english.shingu.ac.kr/index.do' }}
                    target = '_blank'
                >
                Here! ShinGu College WebSite
                </CustomLink>              
                <br /><br />               
                <img src = '/images/myDiploma.jpg' 
                    alt = 'myDiplomaPaperImage'
                    width = '70%'
                    height = 'auto'
                />
                <br /><br />
                <h3>About me</h3>
                <p>
                I have been immigrating from Korea to Canada for about a year.
                <br />
                I am also a permanent resident of Canada.
                <br /><br />
                I majored in WebIT Department in Korea. But now, the department name changed.
                <br />                   
                Just before immigrating to Canada, I had a month of internship experience as a novice front-end developer in Korea.
                <br /><br />
                Besides web development, I have a lot of background knowledge. Especially for health and food.
                <br /><br />
                I am currently learning English diligently. This is what I think is the weakest point.
                <br />               
                I know simple life conversation and work terms. However, it is true that it is very difficult to write a report.
                </p>               
                <br /><br />
                <h3>Skills</h3>
                {/* 각각 div를 만들어준 이유 : 패딩값을 줘서 이미지 사이 간격을 일정하게 주기 위함이다. */}
                <div style = {{ paddingRight: '2vw', display: 'inline-block', width: '12rem' }}>
                    <img src = '/images/javascript.png'
                        alt = 'I can use javascript' 
                        width = '100%'
                    />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block', width: '12rem' }}>
                    <img src = '/images/typescript.png' 
                        alt = 'I can use typescript'
                        width = '100%'
                    />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block', width: '12rem' }}>
                    <img src = '/images/react.png' 
                        alt = 'I can use React' 
                        width = '100%'
                    />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block', width: '12rem' }}>
                    <img src = '/images/nodejs.png' 
                        alt = 'I can use nodeJS' 
                        width = '100%'
                    />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block', width: '12rem' }}>
                    <img src = '/images/AWS.png' 
                        alt = 'I can use AWS' 
                        width = '100%'
                    />
                </div>
                <br /><br />
                <p>
                    I want to work on Node Backend, but it's OK with React Front too.
                    <br />
                    But I'm not a good full-stack developer. I am a novice developer.
                    <br />
                    And I know how to use Linux a little.
                </p>
                <br /><br />
        </MyInfoStyled>
    );
}

export default BodyMyInfo;
import styled from 'styled-components';
import BodyStyled from './BodyStyled';
import { Link, Redirect } from 'react-router-dom';

const MyInfoStyled = styled(BodyStyled)`
    /* mobile horizontal */
    @media only screen and (min-width : 321px) {

    }

    /* mobile vertical */
    @media only screen and (max-width : 320px) {

    }

    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {

    }

`;

function BodyMyInfo(){
    
    return(
        <MyInfoStyled>
            <h2 style={{ position: 'sticky', top:'0'}}>MyInfo</h2>
                <h3>1. My Diploma in Korea</h3>
                <p>I graduated from ShinGu College in Korea.</p>
                <Link to = {{ pathname: 'https://english.shingu.ac.kr/index.do' }}
                    target = '_blank'
                    
                >
                ShinGu College WebSite
                </Link>
                
                <br /><br />
                
                <img src = '/images/myDiploma.jpg' 
                    alt = 'myDiplomaImage'
                    width = '70%'
                    height = 'auto'
                />

                <br /><br />

                <h3>2. About me</h3>
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

                <h3>3. Skills</h3>
                {/* 각각 div를 만들어준 이유 : 패딩값을 줘서 이미지 사이 간격을 일정하게 주기 위함이다. */}
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                    <img src = '/images/javascript.png'
                        alt = 'javascript' 
                        width = '100%'
                        height = '100vh'
                        
                    />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                 <img src = '/images/nodejs.png' 
                    alt = 'nodeJS' 
                    width = '100%'
                    height = '100vh'

                />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                 <img src = '/images/typescript.png' 
                    alt = 'typescript' 
                    width = '100%'
                    height = '100vh'

                />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                  <img src = '/images/AWS.png' 
                    alt = 'AWS' 
                    width = '100%'
                    height = '100vh'

                />
                </div>
        </MyInfoStyled>
    );
}

export default BodyMyInfo;
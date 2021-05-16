import styled from 'styled-components';
import BodyStyled from './BodyStyled';

const MyInfoStyled = styled(BodyStyled)`
    
`;

function BodyMyInfo(){
    
    return(
        <MyInfoStyled>
            <h2 style={{ position: 'sticky', top:'0'}}>MyInfo</h2>
                <h3>1. My Diploma in Korea</h3>
                <p> I </p>
                <img src = '/images/myDiploma.jpg' 
                    alt = 'myDiplomaImage'
                    width = '1000vw'
                    height = 'auto'
                />

                <br />

                <a href = 'https://english.shingu.ac.kr/index.do'
                    target = '_blank' 
                    rel='noreferrer'
                    style = {{  
                        color: '#000000',
                }}>ShinGu College WebSite : Click Here!</a>

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
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                    <img src = '/images/javascript.png'
                        alt = 'javascript' 
                        width = '100vw'
                        height = '100vh'
                        
                    />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                 <img src = '/images/nodejs.png' 
                    alt = 'nodeJS' 
                    width = '160vw'
                    height = '100vh'

                />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                 <img src = '/images/typescript.png' 
                    alt = 'typescript' 
                    width = '100vw'
                    height = '100vh'

                />
                </div>
                <div style = {{ paddingRight: '2vw', display: 'inline-block' }}>
                  <img src = '/images/AWS.png' 
                    alt = 'AWS' 
                    width = '130vw'
                    height = '100vh'

                />
                </div>
        </MyInfoStyled>
    );
}

export default BodyMyInfo;
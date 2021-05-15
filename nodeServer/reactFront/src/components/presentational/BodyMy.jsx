import styled from 'styled-components';
import BodyStyled from './BodyStyled';

const MyinfoStyled = styled(BodyStyled)`
    
`;

function BodyMyInfo(){

    return(
        <MyinfoStyled>
            <h1>MyInfo</h1>
            <div style={{ padding: '3vw'}}>
                <h2>My Diploma in Korea</h2>

            </div>
           
        </MyinfoStyled>
    );
}

export default BodyMyInfo;
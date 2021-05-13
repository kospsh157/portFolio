import styled from 'styled-components';
import Square from './Square';

const MyinfoStyled = styled(Square)`
    width: 90vw;
    height: 75vh;
    float: left;
    padding: 0 3vw 0 3vw;
`;

function BodyMyInfo(){
    return(
        <MyinfoStyled>
            <h3>MyInfo</h3>
            <p>My Diploma in Korea</p>
            <p>My first Job in Korea</p>
        </MyinfoStyled>
    );
}

export default BodyMyInfo;
import styled from 'styled-components';
import Square from './Square';

const MyInfo = styled(Square)`
    width: 90vw;
    height: 75vh;
    float: left;
    padding: 0 3vw 0 3vw;
     




`;

function BodyMyInfo(){
    return(
        <MyInfo>
            <h3>MyInfo</h3>
            <p>My Diploma in Korea</p>
            <p>My first Job in Korea</p>
        </MyInfo>
    );
}

export default BodyMyInfo;
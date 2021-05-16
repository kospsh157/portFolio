import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';

const BodyServerStyled = styled(BodyStyled)`
    text-align: center;
    padding: 0vh 10vw 20vh 0;

`;

function BodyServer(){
    
    return(
        <BodyServerStyled>
            <h1>SververInfo</h1>

        </BodyServerStyled>
    );
}

export default BodyServer;
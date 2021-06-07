import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';

const Err408PageStyled = styled(BodyStyled)`

`;

function Err408Page() {
    
    return (
        <Err408PageStyled>
        <h3>Oh Timed Out! There are many reason why you are timed out.</h3>
        </Err408PageStyled>
    );
}

export default Err408Page;
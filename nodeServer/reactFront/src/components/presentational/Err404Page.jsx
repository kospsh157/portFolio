import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';

const Err404PageStyled = styled(BodyStyled)`

`;

function Err404Page() {
    
    return (
        <Err404PageStyled>
        <h3>Sorry! Not Found Page.</h3>
        </Err404PageStyled>
    );
}

export default Err404Page;
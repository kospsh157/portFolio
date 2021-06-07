import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';

const Err500PageStyled = styled(BodyStyled)`

`;

function Err500Page() {
    
    return (
        <Err500PageStyled>
        <h3>I am very Sorry, Our Server have Problem.</h3>
        </Err500PageStyled>
    );
}

export default Err500Page;
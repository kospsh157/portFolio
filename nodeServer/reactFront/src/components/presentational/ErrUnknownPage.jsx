import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';

const ErrUnknownPageStyled = styled(BodyStyled)`

`;

function ErrUnknownPage() {
    
    return (
        <ErrUnknownPageStyled>
        <h3>I am Sorry, UnknownError.</h3>
        </ErrUnknownPageStyled>
    );
}

export default ErrUnknownPage;
import styled from 'styled-components';
import BodyStyled from '../BodyStyled.jsx';

const Err404PageStyled = styled(BodyStyled)`
`;

function Err404Page() {

    return (
        <Err404PageStyled>
            <h1>Sorry...Not Found</h1>
        </Err404PageStyled>
    );
}

export default Err404Page;
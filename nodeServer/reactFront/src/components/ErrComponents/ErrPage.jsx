import styled from 'styled-components';
import BodyStyled from '../BodyStyled.jsx';
import {useParams} from 'react-router-dom';

const ErrPageStyled = styled(BodyStyled)`

`;

function ErrPage() {
    const {code} = useParams();
    console.log(code);
    let status = '';

    switch(code) {
        case '408':
            status = 'TimedOut Error';
            break;
        case '500':
            status = 'Server Error';
            break;
        default: 
            status = 'Unknown Error';
    };

    return (
        <ErrPageStyled>
            <h1>Sorry...{status}</h1>
        </ErrPageStyled>
    );
}

export default ErrPage;
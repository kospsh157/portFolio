import styled from 'styled-components';
import Square from './Square.jsx';

const BodyStyled = styled(Square)`
    /*normal desktop horizontal ( 1100px or more ) */
    width: 90vw;
    height: 85vh;
    float: left;
    text-align: center;
    padding: 0vh 10vw 0vh 0vh;
    overflow: auto;
    color: #000000;
    font-family: Verdana;
    

    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        width: 100vw;
        padding: 0 0 0 0;
    }
`;

export default BodyStyled;
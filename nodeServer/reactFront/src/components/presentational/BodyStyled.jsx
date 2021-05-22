import styled from 'styled-components';
import Square from './Square.jsx';

const BodyStyled = styled(Square)`
    /*normal desktop horizontal ( 1100px or more ) */
    width: 80vw;
    height: 85vh;
    float: left;
    text-align: center;
    overflow-x: hidden;
    overflow-y: auto;
    color: #000000;
    font-family: Verdana;
    scrollbar-width: none;
    margin: 0 9vw 0 0;
    padding: 0 2vw 0 2vw;
    z-index: 1;

    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        width: 100vw;
        position: relative;
    }
`;

export default BodyStyled;
import styled from 'styled-components';

const StickyP = styled.h3`
    padding: 1vh 10vw 5vh 0;
    margin: 0 0 5vh 0;
    width: 89vw;
    height: auto;
    box-sizing: border-box;
    display: inline;
    position: sticky;
    top: 0;
    float: left;
    font-family: Verdana;
    color: rgba(128, 128, 128, 0.5);
    &:hover {
        color: #000000;
    };
    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        width: 100vw;
        padding: 0 0 0 0;
    }
`;

export default StickyP;
{/* <div style="cursor:pointer;" onclick="window.scrollTo(0,0);">TOP</div> */}
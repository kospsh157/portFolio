import styled from 'styled-components';

const StickyStyled = styled.div`
    padding: 1vh 10vw 5vh 0;
    margin: 0 0 5vh 0;
    width: 90vw;
    height: auto;
    box-sizing: border-box;
    display: inline;
    position: sticky;
    top: 0;
    float: left;
    font-family: Verdana;
    color: rgba(128, 128, 128, 0.5);
    font-size: 1.3em;
    &:hover {
        color: #000000;
    };
    
    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        width: 100vw;
        padding: 0 0 0 0;
    }
`;

function StickyH3({ text }) {

    return (
        <StickyStyled onClick = { () => document.window.scrollTo(0, 0) }>
            {text}
        </StickyStyled>
    );
}


export default StickyH3;
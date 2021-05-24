import styled from 'styled-components';

const StickyStyled = styled.div`
    float: left;
    box-sizing: border-box;
    width: 76vw;
    height: auto;
    padding: 0 0 0 0;
    margin: 0 0 5vh 0;
    cursor: pointer;
    
    /* display: inline; */
    position: sticky;

    top: 0;
    font-family: Verdana;
    color: rgba(128, 128, 128, 0.5);
    font-size: 1.3em;
    &:hover {
        color: #000000;
    };
    
    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        width: 100vw;
    }
`;

function StickyDiv({ text, parent }) {

    return (
        <StickyStyled onClick = { () => parent.current.scrollTo(0, 0) }>
            {text}
        </StickyStyled>
    );
}

export default StickyDiv;
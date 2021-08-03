import styled from 'styled-components';

const StickyStyled = styled.div`
    box-sizing: border-box;
    width: 66vw;
    height: auto;
    padding: 0;
    margin: 0 0 5vh 0;
    cursor: pointer;
    position: sticky;
    top: 0;
    font-family: Verdana;
    color: rgba(128, 128, 128, 0.5);
    font-size: 1.3em;
    &:hover {
        color: #000000;
    };
    
    /* small display horizontal */
    @media only screen and (max-width: 1100px) {
        // 100 - 7 - 7 = 86 (minus padding of bodyStyled)
        width: 86vw; // bodyStyled에서 padding에 양쪽 가로에 7vw씩 주웠으므로, bodyStyled의 width가 100%가 될 때에는, 반드시 86vw가 되어야 한다.
    }
`;

function StickyDiv({text, parent}) {

    return (
        <StickyStyled onClick = {() => parent.current.scrollTo(0, 0)}>
            {text}
        </StickyStyled>
    );
}

export default StickyDiv;
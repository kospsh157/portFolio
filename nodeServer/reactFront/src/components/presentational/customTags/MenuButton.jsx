import styled from 'styled-components';
import Square from '../Square';

const MenuButtonStyled = styled(Square)`
    width: 1em;
    height: 1em;
    // background-color: rgba(255, 255, 255, 0);
    float: left;
    display: none;

    /* small horizontal */
    @media only screen and (max-width : 1100px) {
        display: inline-block;
    }
`;

function MenuButton({funcData}) {
    
    return (
        <MenuButtonStyled onClick = {funcData} >
            <img src = '/images/menu.png' width = '50%' />
        </MenuButtonStyled>
    );
}

export default MenuButton;
// navigation 
import styled from 'styled-components';
import Square from './Square.jsx';
import {Link} from 'react-router-dom';
import CustomLink from './customTags/CustomLink.jsx';

const MenuStyled = styled(Square)`
    width: 10vw;
    height: 85vh;
    // border-right: 2px solid black;
    float: left;
    font-size: 1.5em;
    line-height: 2.5em;
    text-align: center;
    padding: 20vh 1vw 20vh 1vw;
    
    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        display: none;
    }
`;

function Menu() {

    return (
        <MenuStyled>
            <ul style={{ listStyle: 'none', width: '8vw', padding: '0', margin: '0' }}>
                <CustomLink to='/' >Home</CustomLink>
                <br />
                <CustomLink to='/myinfo' >MyInfo</CustomLink>
                <br />
                <CustomLink to='/serverinfo' >ServerInfo</CustomLink>
                <br />
                <CustomLink to='/frontinfo' >FrontInfo</CustomLink>
                <br />
                <CustomLink to='/api' >API</CustomLink>
                <br />
            </ul>
        </MenuStyled>
    );
}

export default Menu;
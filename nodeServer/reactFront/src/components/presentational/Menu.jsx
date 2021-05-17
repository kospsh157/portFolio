// navigation 
import styled from 'styled-components';
import Square from './Square.jsx';
import {Link} from 'react-router-dom';

const MenuStyled = styled(Square)`
    width: 10vw;
    height: 85vh;
    // border-right: 2px solid black;
    float: left;
    font-family: Verdana;
    font-style: italic;
    font-size: 1.5em;
    line-height: 2.5em;
    text-align: center;
    padding: 20vh 1vw 20vh 1vw;

     /* small desktop horizontal */
     @media only screen and (max-width : 1100px) {
        display: none;
    }

`;

function Menu(){

    return (
        <MenuStyled>
            <ul style={{ listStyle: 'none', width: '8vw', padding: '0', margin: '0' }}>
                <Link to='/' style={{color: 'grey'}}>Home</Link>
                <br />
                <Link to='/myinfo' style={{color: 'grey'}}>MyInfo</Link>
                <br />
                <Link to='/serverinfo' style={{color: 'grey'}}>ServerInfo</Link>
                <br />
                <Link to='/frontinfo' style={{color: 'grey'}}>FrontInfo</Link>
                <br />
                <Link to='/api' style={{color: 'grey'}}>API</Link>
                <br />
            </ul>
        </MenuStyled>
    );
}

export default Menu;
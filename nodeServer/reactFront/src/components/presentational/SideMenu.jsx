// navigation 
import styled from 'styled-components';
import Square from './Square.jsx';
import {Route, Link} from 'react-router-dom';


const Menu = styled(Square)`
    width: 10vw;
    height: 75vh;
    // border-right: 2px solid black;
    float: left;
    font-family: Verdana;
    font-style: italic;
    font-size: 1.5em;
    line-height: 2.5em;
    text-align: center;
    padding: 5em 0 5em 0;
`;



function SideMenu(){
    return (
        <Menu>
            <ul style={{listStyle: 'none', width: '10vw', padding: '0'}}>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/myinfo'>MyInfo</Link>
                <br />
                <Link to='/serverinfo'>ServerInfo</Link>
                <br />
                <Link to='/frontinfo'>FrontInfo</Link>
                <br />
                <Link to='/api'>API</Link>
                <br />
            </ul>
        </Menu>
    );
}

export default SideMenu;
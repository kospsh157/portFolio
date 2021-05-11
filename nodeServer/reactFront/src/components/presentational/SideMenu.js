// navigation 
import styled from 'styled-components';
import Square from './Square';


const Menu = styled(Square)`
    width: 10vw;
    height: 75vh;
    border-right: 2px solid black;
    float: left;
    font-family: Verdana;
    font-style: italic;
    font-size: 1.5em;
    line-height: 2.5em;
    text-align: center;
    
`;



function SideMenu(){
    return (
        <Menu>
            <ul style={{listStyle: 'none', width: '10vw', padding: '0'}}>
                <li>Home</li>
                <li>MyInfo</li>
                <li>what<br/>Server</li>
                <li>what<br/>Front</li>
                <li>API</li>
            </ul>
        </Menu>
    );
}

export default SideMenu;
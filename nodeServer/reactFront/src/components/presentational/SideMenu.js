// navigation 
import styled from 'styled-components';
import Square from './Square';

const menuList = styled.ul`
    <li></li>




`
const Navigation = styled(Square)`
    width: 16vw;
    height: 60vh;
    border-right: 2px solid black;
    
    
    





`;

function SideMenu(){
    return (
        <ul>
            <li>Home</li>
            <li>MyInfo</li>
            <li>what&nbsp;Server</li>
            <li>what&nbsp;Front</li>
            <li>API</li>
        </ul>
    );
}

export default SideMenu;
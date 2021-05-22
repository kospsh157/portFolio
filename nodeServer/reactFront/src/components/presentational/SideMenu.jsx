// navigation 
import styled from 'styled-components';
import Square from './Square.jsx';
import CustomLink from './customTags/CustomLink.jsx';

const SideMenuStyled = styled(Square)`
    width: 10vw;
    height: 85vh;
    float: left;
    font-size: 1.5em;
    line-height: 2.5em;
    text-align: center;
    padding: 20vh 1vw 20vh 1vw;
    background-color: #ffffff;

    /* small desktop horizontal */
    @media only screen and (max-width : 1100px) {
        display: ${props => props.toggle || 'none' };
        z-index: 2;
        width: 40vw;
        background-color: rgba(255, 255, 255, 0);
        position: absolute;
        top: 10vh;
        left: 0;
    }
`;

function SideMenu({ toggle }) {

    return (
        <SideMenuStyled toggle = { toggle }>
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
        </SideMenuStyled>
    );
}

export default SideMenu;
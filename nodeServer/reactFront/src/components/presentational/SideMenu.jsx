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
    @media only screen and (max-width: 1100px) {
        display: ${props => props.toggle || 'none' };
        z-index: 2;
        width: 20vw;
        background-color: rgba(213, 217, 224, 0.5);
        position: absolute;
        top: 10vh;
        left: 0;
        font-size: 1.5em;
    }
`;

// app 에서 상탯값을 toggle로 받아서 판단함.
// toggle 값은 'none' or 'inline' 임.
function SideMenu({toggle}) {
    let widthSize = '8vw';
    if(toggle === 'inline') {
        widthSize = '1vw';
    }

    return (
        <SideMenuStyled toggle = {toggle}>
            <ul style={{listStyle: 'none', width: {widthSize}, padding: '0', margin: '0'}}>
                <CustomLink to='/'>Home</CustomLink>
                <br/>
                <CustomLink to='/myinfo'>MyInfo</CustomLink>
                <br/>
                <CustomLink to='/siteinfo'>SiteInfo</CustomLink>
                <br/>
                <CustomLink to='/board'>Board</CustomLink>
                <br/>
            </ul>
        </SideMenuStyled>
    );
}

export default SideMenu;
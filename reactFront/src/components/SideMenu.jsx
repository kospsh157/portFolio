import styled from 'styled-components';
import Square from './Square.jsx';
import CustomLink from './customTags/CustomLink.jsx';

const SideMenuStyled = styled(Square)`
    width: 10vw;
    height: 85vh;
    float: left;
    font-size: 2rem; // 2rem = 10px * 2 = 20px
    line-height: 10vh;
    text-align: center;
    padding: 20vh 2vw 20vh 2vw;
    background-color: #ffffff;

    /* small desktop horizontal */
    @media only screen and (max-width: 1100px) {
        // It receives the status value from App.js 
        // Shows or hides the mini version menu bar according to the window size.
        display: ${props => props.toggle || 'none'};
        width: 13rem; // 13rem = 13 * 10px = 130px
        background-color: rgba(255, 255, 255, 0.6);
        position: absolute;
        top: 10vh;
        left: 0;
    }
`;

// app 에서 상탯값을 toggle로 받아서 판단함.
// toggle 값은 'none' or 'inline' 임.
function SideMenu({ toggle }) {

    return (
        <SideMenuStyled toggle = {toggle}>
            <ul style={{listStyle: 'none', width: '5vw', padding: '0', margin: '0'}}>
                <CustomLink to='/'>Home</CustomLink>
                <br/>
                <CustomLink to='/myinfo'>MyInfo</CustomLink>
                <br/>
                <CustomLink to='/siteinfo'>SiteInfo</CustomLink>
                <br/>
                <CustomLink to='/board'>GuestBook</CustomLink>
                <br/>
                <CustomLink to='/LiveChat'>LiveChat</CustomLink>
                <br/>
            </ul>
        </SideMenuStyled>
    );
}

export default SideMenu;
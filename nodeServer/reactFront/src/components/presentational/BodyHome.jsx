import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';
import CustomLink from './customTags/CustomLink';

const BodyHomeStyled = styled(BodyStyled)`
    text-align: center;
    padding-top: 5vh;
`;

function BodyHome(){
    
    return(
        <BodyHomeStyled>
            <h1>Hello.</h1>
            <h2>Thank you for coming to my shabby resume site.</h2>
            <h2>I created this site all myself.</h2>
            <h2>This site was built with Node and React.</h2>
            <h2>The code is in the 'portFolio' folder in my Git repository. 
                <br /> 
                <CustomLink to = {{ pathname: 'https://github.com/kospsh157/portFolio' }}
                    target = '_blank'
                >If you want to see the code, please press it.</CustomLink></h2>
            <h2>Thank you.</h2>
            <p style = {{ fontSize: '0.8em' }}>(This site is optimized for PC browsers
            but it is made as a responsive site, so you can view it on mobile.)</p>
        </BodyHomeStyled>
    );
}

export default BodyHome;
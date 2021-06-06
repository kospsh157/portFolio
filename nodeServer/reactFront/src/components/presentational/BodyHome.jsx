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
                >Git repository Here!</CustomLink></h2>
            <h2>Thank you.</h2>
            <p style = {{fontSize: '0.8em', color: 'red'}}>(This site was created by only me from start to finish, 
            and the git repository proves that this fact is not false.)</p>
        </BodyHomeStyled>
    );
}

export default BodyHome;
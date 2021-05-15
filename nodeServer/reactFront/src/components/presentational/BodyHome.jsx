import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';

const BodyHomeStyled = styled(BodyStyled)`
    text-align: center;
    padding: 20vh 10vw 20vh 0;

`;

function BodyHome(){
    
    return(
        <BodyHomeStyled>
            <h1>Hello.</h1>
            
            <h2>Thank you for coming to my shabby resume site.</h2>
            
            <h2>This site was built with Node and React.</h2>
            
            <h2>Thank you.</h2>
        </BodyHomeStyled>
    );
}
export default BodyHome;
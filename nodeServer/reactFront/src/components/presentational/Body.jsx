import styled from 'styled-components';
import Square from './Square.jsx';

const BodyStyled = styled(Square)`
    width: 90vw;
    height: 85vh;
    float: left;
    padding: 3vh 3vw 3vh 3vw;
    
    


`;






function Body(){
    
    
    
    
    
    return(
        <BodyStyled>
            <h1> 안녕하세요 .</h1>
            <h1> 안녕하세요 .</h1>
            <h1> 안녕하세요 .</h1>
            <h1> 안녕하세요 .</h1>
            <h1> 안녕하세요 .</h1>
            <h1> 안녕하세요 .</h1>



        </BodyStyled>
    );
}

export default Body;
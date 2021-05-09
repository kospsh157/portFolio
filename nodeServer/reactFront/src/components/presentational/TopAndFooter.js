import styled from 'styled-components';
import Square from './Square';

// create Top and Footer
const TopNevi = styled(Square)`
  width: 16vw;
  height: 15vh;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  float: left;
  

`;

const TopBody = styled(Square)`
  width: 83vw;
  height: 15vh;
  border-bottom: 2px solid black;
  float: left;
  text-align: center;
  font-size: 2.5em;
  font-family: Verdana;
  font-style: italic;

  /* Make inner text vertically center aligned (You can use this way only for one sentence.)*/
  line-height: 2.5em;

`;

const FooterBody = styled(Square)`
  width: 83vw;
  height: 15vh;
  border-top: 2px solid black;
  float: left;  
  text-align: center;

  /* Make inner div vertically center aligned  */
  display: flex;
  align-items: center; 

`;

const FooterNavi = styled(Square)`
  width: 16vw;
  height: 15vh;
  border-right: 2px solid black;
  border-top: 2px solid black;
  float: left;
`;




const TopAndFooter = [TopNevi, TopBody, FooterNavi, FooterBody];
export default TopAndFooter;
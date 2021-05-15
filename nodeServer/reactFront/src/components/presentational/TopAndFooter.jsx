import styled from 'styled-components';
import Square from './Square.jsx';

// create Top and Footer
const TopNevi = styled(Square)`
  width: 10vw;
  height: 10vh;
  // border-bottom: 2px solid black;
  border-right: 2px solid black;
  float: left;
  
`;

const TopBody = styled(Square)`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid grey;
  float: left;
  text-align: center;
  font-size: 2.5em;
  font-family: Verdana;
  font-style: italic;
  color: grey;

  /* Make inner text vertically center aligned (You can use this way only for one sentence.)*/
  line-height: 1.5em;

`;

const FooterBody = styled(Square)`
  width: 100vw;
  height: 5vh;
  border-top: 2px solid grey;
  float: left;  
  text-align: center;
  color: grey;

  // Make inner div vertically center aligned by padding
  padding: 0.5vh;

  /* Make inner div vertically center aligned  */
  // display: flex;
  // align-items: center; 

`;

const FooterNavi = styled(Square)`
  width: 10vw;
  height: 5vh;
  border-right: 2px solid black;

  // border-top: 2px solid black;
  float: left;

`;

const TopAndFooter = [TopNevi, TopBody, FooterNavi, FooterBody];

export default TopAndFooter;
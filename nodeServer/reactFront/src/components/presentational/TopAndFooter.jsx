import styled from 'styled-components';
import Square from './Square.jsx';

// Top and Footer
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
  background-color: rgba(240, 237, 221, 0.6);

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
  background-color: rgba(240, 237, 221, 0.6);

  // Make inner div vertically center aligned by padding
  padding: 0.1vh;

  /* Make inner div vertically center aligned  */
  // display: flex;
  // align-items: center; 

`;

const TopAndFooter = [TopBody,  FooterBody];

export default TopAndFooter;
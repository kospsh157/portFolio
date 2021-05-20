import styled from 'styled-components';
import Square from './Square.jsx';

// Top and Footer
const TopBody = styled(Square)`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid #808080;
  float: left;
  text-align: center;
  font-size: 2em;
  color: #808080;
  background-color: rgba(240, 237, 221, 0.6);
  box-shadow: 1px 1px 3px 1px #000000;
  

  /* Make inner text vertically center aligned (You can use this way only for one sentence.)*/
  padding: 2vh 0 2vh 0;
`;

const FooterBody = styled(Square)`
  width: 100vw;
  height: 5vh;
  border-top: 2px solid #808080;
  float: left;  
  text-align: center;
  color: #808080;
  background-color: rgba(240, 237, 221, 0.6);
  box-shadow: 1px 1px 3px 1px #000000;
  // Make inner div vertically center aligned by padding
  padding: 0.1vh;

  /* Make inner div vertically center aligned  */
  // display: flex;
  // align-items: center; 
`;

const TopAndFooter = [TopBody,  FooterBody];

export default TopAndFooter;
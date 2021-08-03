import styled from 'styled-components';
import Square from './Square.jsx';

// Top and Footer
const TopBody = styled(Square)`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid #808080;
  float: left;
  text-align: center;
  font-size: 3rem;
  color: #808080;
  background-color: rgba(240, 237, 221, 0.6);
  box-shadow: 1px 1px 3px 1px #000000;

  /* Make inner text vertically center aligned (You can use this way only for one sentence.)*/
  padding: 2vh 0 2vh 0;

  /* small horizontal */
  @media only screen and (max-width : 1100px) {
    // Since there is a menu button on the left, 
    // add a padding value to the right of the title to align the title to the center.
    padding: 1vh 4vw 1vh 0; 
  }

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
  font-size: 1rem;

  /* mobile horizontal */
  @media only screen and (max-width : 360px) {
    padding: 0;
  }
`;

const TopAndFooter = [TopBody,  FooterBody];

export default TopAndFooter;
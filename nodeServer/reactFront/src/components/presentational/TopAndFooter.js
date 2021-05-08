import styled from 'styled-components';
import Square from './Square';

// create Top and Footer
const TopNevi = styled(Square)`
  width: 16vw;
  height: 20vh;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  float: left;
`;

const TopBody = styled(Square)`
  width: 84vw;
  height: 20vh;
  border-bottom: 2px solid black;
  float: left;
`;

const FooterBody = styled(Square)`
  width: 84vw;
  height: 20vh;
  border-top: 2px solid black;
  float: right;  
  text-align: center;
  display: flex;
  align-items: center;
`;

const FooterNavi = styled(Square)`
  width: 16vw;
  height: 20vh;
  border-right: 2px solid black;
  border-top: 2px solid black;
  float: right;
`;




const TopAndFooter = [TopNevi, TopBody, FooterNavi, FooterBody];
export default TopAndFooter;
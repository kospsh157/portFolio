import styled from 'styled-components';

// create basic component;
const Square = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-left: ${props => props.borderLeft || 0} solid black;
    border-top: ${props => props.borderTop || 0} solid black;
    border-right: ${props => props.borderRight || 0} solid black;
    border-bottom: ${props => props.borderBottom || 0} solid black;
    float: ${props => props.float || 'none'};    
    box-sizing: border-box;
    background-color: #F0EDDD;
    
`;

export default Square;
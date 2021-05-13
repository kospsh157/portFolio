import styled from 'styled-components';

// create basic component;
const Square = styled.div`
    /* width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
    border-left: ${props => props.borderLeft || 0} solid black;
    border-top: ${props => props.borderTop || 0} solid black;
    border-right: ${props => props.borderRight || 0} solid black;
    border-bottom: ${props => props.borderBottom || 0} solid black;
    float: ${props => props.float || 'none'};     */
    box-sizing: border-box;
    background-color: rgba(240, 237, 221, 0.4);
    margin: 0;
    padding: 0;
    
`;

export default Square;
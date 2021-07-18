import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
    text-decoration: none;
    color: #808080;
    &:hover {
        color: #000000;
    }
    /* &:focus, &:hover, &:visited, &:link, &:active */
`;

export default CustomLink;
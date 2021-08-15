import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';
import { useRef } from 'react';
import StickyDiv from './customTags/StickyDiv.jsx';
import { Box } from '@material-ui/core';

const BodyChatStyled = styled(BodyStyled)`

`;

const BoxStyled = styled(Box)`
    border: 2px solid grey;

    

`;
function BodyChat() {
    const chat = useRef();

    return (
        <BodyChatStyled ref = {chat}>
            <StickyDiv text = '-LiveChat-' parent = {chat} />
            <BoxStyled >
                안녕하세요.
                
            </BoxStyled>
        </BodyChatStyled>
    );
}

export default BodyChat;
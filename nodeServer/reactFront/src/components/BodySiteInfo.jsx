import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';
import StickyDiv from './customTags/StickyDiv.jsx';
import { useRef } from 'react';

const BodySiteInfoStyled = styled(BodyStyled)`

`;

function BodySiteInfo() {
    const siteInfo = useRef();

    return(
        <BodySiteInfoStyled ref = {siteInfo}>
            <StickyDiv text = '-SiteInfo-' parent = {siteInfo}/>
            <h3>Frontend</h3>
                <p>
                This site is built to be responsive.
                It is most optimized for a FHD(1920x1080) pixel or higher PC monitor, 
                <br />
                but you can also use this site on mobile or smaller monitor as well. 
                <br /><br />
                The design concept was like looking at a resume delivered by mail.
                <br />
                I want you to read my resume as if reading a letter without hesitation.
                </p>
                <br /><br />
                <img src = "/images/react+amplify.png"
                    width = '70%'
                    height = 'auto'
                    alt = 'Amplify and React'
                />
                <p>
                This site is hosted through Amplify on AWS.
                <br />
                I tried to learn the basics as much as possible, and I wanted to use only the basics.
                <br /><br />
                This site is being watched through the amplify monitoring feature, 
                <br />
                and I'm still learning by doing safety tests myself.
                <br />
                </p>
            <h3>Backend</h3>
        </BodySiteInfoStyled>
    );
}

export default BodySiteInfo;
import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';
import StickyDiv from './customTags/StickyDiv.jsx';
import {useRef} from 'react';

const BodySiteInfoStyled = styled(BodyStyled)`

`;

function BodySiteInfo() {
    const siteInfo = useRef();

    return(
        <BodySiteInfoStyled ref = {siteInfo}>
            <StickyDiv text = '-SiteInfo-' parent = {siteInfo} />
            <h3>Frontend</h3>
                <p>
                This site is built to be responsive.
                It is most optimized for a normal 1080 pixel or higher PC monitor, 
                <br />
                but you can also use this site on mobile or smaller monitor as well. 
                </p>
                <br /><br />
                <p>
                
                </p>
            

                






            <h3>Backend</h3>

        </BodySiteInfoStyled>
    );
}

export default BodySiteInfo;
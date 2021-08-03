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
                <img src = '/images/reactamplify.png'
                        width = '70%'
                        alt = 'Amplify and React'
                    />
                <p>I used React.js for front and it is hosted through AWS Amplify</p>
                <br />

                <p>
                    This site is built to be responsive.
                    It is most optimized for a FHD(1920x1080) pixel or higher PC monitor, 
                    <br />
                    but you can also use this site on mobile or smaller monitor as well. 
                    <br /><br />
                    The design concept was like looking at a resume delivered by mail.
                    <br />
                    I hope you can easily read my resume site.
                    <br /><br />
                    I chosen styled-components module for CSS.
                    <br />
                    Sometimes I used "inline style CSS" for annoying things. but I tried to be consistent.
                    <br /><br />
                    This site is being watched through the AWS monitoring feature, 
                    <br />
                    and I'm still learning and updating this site to fix for issues.
                    <br />
                </p>
            <br /><br /><br /><br />

            <h3>Backend</h3>
                <img src = '/images/backendDiagram.png'
                    width = '70%'
                    alt = 'AWS Backend Diagram'
                />
                <p>I have implemented a serverless environment using AWS Lambda, API Gateway, DynamoDB and IAM.</p>
                <br />

                <p>
                    I can make a simple server using Node.js on Mac or Linux, 
                    <br />
                    but it is difficult, lots of mistakes, lots of times and I should have computer on 24/7.
                    <br />
                    So I used AWS.
                    <br /><br />
                    This is my first time using AWS, and I took this opportunity to learn the basics of how to use it.
                </p>
                <br /><br /><br /><br />
        </BodySiteInfoStyled>
    );
}

export default BodySiteInfo;
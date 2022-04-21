import styled from "@emotion/styled";
import {Box,Container} from "@mui/material";



const ShowcaseWrapper = styled(Box)`
  height:400px;
  background-color: #047aed;
  color:white;
  position: relative;
  
  ::before, ::after{
    content:"";
    position: absolute;
    height: 100px;
    bottom: -70px;
    right:0;
    left: 0;
    background:white;
    transform: skewY(-3deg);
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
  }
`

function Showcase(props) {
    return (
        <ShowcaseWrapper>
            <div className="container grid">
                <div className="showcase-text">
                    {/*<h1>Easier Deployment</h1>*/}
                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been*/}
                    {/*    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley*/}
                    {/*    of type and scrambled it to make a type specimen book.</p>*/}
                    <a href="features.html" className="btn btn-outline">Read More</a>
                </div>

                {/*<div className="showcase-form card">*/}
                {/*    <h2>Request a Demo</h2>*/}
                {/*    <form name="contact" methos="POST" data-netlify="true" netlify-honeypot="bot-field">*/}
                {/*        <input type="hidden" name="form-name" value="contact" />*/}
                {/*            <p className="hidden">*/}
                {/*                <label htmlFor="">Don't fill this out if you're human:*/}
                {/*                    <input name="bot-field" />*/}
                {/*                </label>*/}
                {/*            </p>*/}
                {/*            <div className="form-control">*/}
                {/*                <input type="text" name="name" placeholder="Name" required />*/}
                {/*            </div>*/}
                {/*            <div className="form-control">*/}
                {/*                <input type="text" name="company" placeholder="Company Name" required />*/}
                {/*            </div>*/}
                {/*            <div className="form-control">*/}
                {/*                <input type="email" name="email" placeholder="Email" required />*/}
                {/*            </div>*/}
                {/*            <input type="submit" value="Send" className="btn btn-primary" />*/}
                {/*    </form>*/}
                {/*</div>*/}

            </div>
        </ShowcaseWrapper>
    );
}

export default Showcase;
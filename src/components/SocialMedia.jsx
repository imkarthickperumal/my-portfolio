import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/_karthikperumal">
               <BsTwitter />
            </a>
         </div>
         {/* <div>
            <a href="https://www.linkedin.com/in/imkarthickperumal/">
               <BsInstagram />
            </a>
         </div> */}
         <div>
            <a href="https://www.linkedin.com/in/imkarthickperumal/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:karthickperumal.vp@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;

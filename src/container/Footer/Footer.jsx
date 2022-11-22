import { React, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Footer.scss";

function Footer() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

   const [loading, setLoading] = useState(false);
   const { name, email, message } = formData;
   const handleChangeInput = (e) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      setLoading(true);

      const contact = {};
   };
   return (
      <>
         <h2 className="head-text">Take a coffee & chat with me</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} />
               <a href="mailto:karthickperumal.vp@gmail.com" className="p-text">
               karthickperumal.vp@gmail.com
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.mobile} />
               <a href="tel:+91 9500790694" className="p-text">
                  +91 9500790694
               </a>
            </div>
            {/* <div className="app__footer-card">
               <img src={images.twitter} />
               <a href="https://twitter.com/_karthikperumal" className="p-text">
                  _karthikperumal
               </a>
            </div> */}
            <div className="app__footer-card">
               <img src={images.linkedln} />
               <a
                  href="https://www.linkedin.com/in/imkarthickperumal/"
                  className="p-text"
               >
                  imkarthickperumal
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} />
               <a href="https://github.com/imkarthickperumal" className="p-text">
                  imkarthickperumal
               </a>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Footer, "app__footer"),
   "contact",
   "app__whitebg"
);

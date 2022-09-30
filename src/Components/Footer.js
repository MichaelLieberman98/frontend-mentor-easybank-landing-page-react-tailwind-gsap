import React from 'react';
import Logo from '../images/logo.svg';

import IconFacebook from '../images/icon-facebook.svg';
import IconYoutube from '../images/icon-youtube.svg';
import IconTwitter from '../images/icon-twitter.svg';
import IconPinterest from '../images/icon-pinterest.svg';
import IconInstagram from '../images/icon-instagram.svg';

import classnames from "classnames";

export default function Footer({ paddingLeft, paddingRight }) {
  var width = window.innerWidth;
  return (
    <footer className="bg-[#2D314D]">
      {width < 800 ? (
        <div className={classnames(`flex justify-between text-center
        sm:py-[30px] sm:flex-col
        lg:py-[20px] lg:flex-row lg:text-left px-[80px]`)}>
          <div className={classnames(`first-3-columns flex flex-col justify-between
        lg:flex-row lg:min-w-[500px] lg:w-[200px]`)}>

            <div className="logo+5-icons flex flex-col w-[240px] mx-auto">
              <img className={classnames(`w-[150px] h-auto mx-auto`)} src={Logo} alt="logo" />
              <div className={classnames(`flex flex-row mt-[20px] mx-auto w-[190px] justify-between`)}>
                <img className={classnames(`h-[20px] w-auto mx-[5px]`)} src={IconFacebook} alt="Facebook" />
                <img className={classnames(`h-[20px] w-auto mx-[5px]`)} src={IconYoutube} alt="Youtube" />
                <img className={classnames(`h-[20px] w-auto mx-[5px]`)} src={IconTwitter} alt="Twitter" />
                <img className={classnames(`h-[20px] w-auto mx-[5px]`)} src={IconPinterest} alt="Pinterest" />
                <img className={classnames(`h-[20px] w-auto mx-[5px]`)} src={IconInstagram} alt="Instagram" />
              </div>
            </div>


            <div className={classnames(`about-us-contact-blog flex flex-col mt-[20px]`)}>
              <a className={classnames(`my-[5px]`)} href="#">About Us</a>
              <a className={classnames(`my-[5px]`)} href="#">Contact</a>
              <a className={classnames(`my-[5px]`)} href="#">Blog</a>
            </div>

            <div className={classnames(`careers-support-privacy-policy flex flex-col`)}>
              <a className={classnames(`my-[5px]`)} href="#">Careers</a>
              <a className={classnames(`my-[5px]`)} href="#">Support</a>
              <a className={classnames(`my-[5px]`)} href="#">Privacy Policy</a>
            </div>
          </div>

          <div className={classnames(`last-column 
          sm:mt-[24px]
          lg:text-right lg:relative lg:top-[10px]`)}>
            <button className={classnames(`request-invite-button`)}>
              Request Invite
            </button>
            {/* https://careerkarma.com/blog/html-copyright-symbol/#:~:text=The%20HTML%20copyright%20symbol%20is,not%20represented%20on%20your%20keyboard. */}
            <h6 className={classnames(`mt-[20px] font-[300]`)}><span>&#169;</span> Easybank. All Rights Reserved</h6>
          </div>
        </div>
      ) : (
        <div className={classnames(`flex flex-row justify-between py-[40px] px-[80px]`)}>
          <div className={classnames(`first-3-columns flex flex-row justify-between lg:min-w-[55%]`)}>
            <div className="logo+5-icons flex flex-col justify-between">
              <img className={classnames(`w-[150px] h-auto`)} src={Logo} alt="logo" />
              <div className={classnames(`flex flex-row justify-between`)}>
                <img className={classnames(`h-[20px] w-auto mx-[3px]`)} src={IconFacebook} alt="Facebook" />
                <img className={classnames(`h-[20px] w-auto mx-[3px]`)} src={IconYoutube} alt="Youtube" />
                <img className={classnames(`h-[20px] w-auto mx-[3px]`)} src={IconTwitter} alt="Twitter" />
                <img className={classnames(`h-[20px] w-auto mx-[3px]`)} src={IconPinterest} alt="Pinterest" />
                <img className={classnames(`h-[20px] w-auto mx-[1px]`)} src={IconInstagram} alt="Instagram" />
              </div>
            </div>


            <div className={classnames(`about-us-contact-blog flex flex-col`)}>
              <a className={classnames(`my-[5px]`)} href="#">About Us</a>
              <a className={classnames(`my-[5px]`)} href="#">Contact</a>
              <a className={classnames(`my-[5px]`)} href="#">Blog</a>
            </div>

            <div className={classnames(`careers-support-privacy-policy flex flex-col`)}>
              <a className={classnames(`my-[5px]`)} href="#">Careers</a>
              <a className={classnames(`my-[5px]`)} href="#">Support</a>
              <a className={classnames(`my-[5px]`)} href="#">Privacy Policy</a>
            </div>
          </div>

          <div className={classnames(`last-column 
          sm:mt-[24px]
          lg:text-right lg:relative lg:top-[10px]`)}>
            <button className={classnames(`request-invite-button`)}>
              Request Invite
            </button>
            {/* https://careerkarma.com/blog/html-copyright-symbol/#:~:text=The%20HTML%20copyright%20symbol%20is,not%20represented%20on%20your%20keyboard. */}
            <h6 className={classnames(`mt-[20px] font-[300]`)}><span>&#169;</span> Easybank. All Rights Reserved</h6>
          </div>
        </div>
      )}
    </footer>
  );
}
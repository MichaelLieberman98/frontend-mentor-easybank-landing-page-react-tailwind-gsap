import React from 'react';
import Logo from '../images/logo.svg';

import IconFacebook from '../images/icon-facebook.svg';
import IconYoutube from '../images/icon-youtube.svg';
import IconTwitter from '../images/icon-twitter.svg';
import IconPinterest from '../images/icon-pinterest.svg';
import IconInstagram from '../images/icon-instagram.svg';

import classnames from "classnames";

// const MessageBanner = (props) => {
//   const classStr = classnames(
//     "pointer-events-autoborder-t-4 rounded-b px-4 py-3 shadow-md duration-1000",
//     props.bgColor,
//     props.textColor,
//     props.borderColor
//   );
//   return <div className={classStr} role="alert">{props.description}</div>
// };

// export { MessageBanner }

export default function Footer({ paddingLeft, paddingRight }) {
  const classStr = classnames(
    "pt-[30px] pb-[30px] flex flex-row justify-between",
    paddingLeft,
    paddingRight
  );
  return (
    <footer className="bg-[#2D314D]">
      {/* <div className="content pl-$padding pr-[180px]"> */}
      {/* <div className={classnames(`pt-[30px] pb-[30px] flex flex-row justify-between`)}>

      </div> */}
      <div className={classnames(`pt-[30px] pb-[30px] flex flex-col justify-between text-center
        lg:flex-row lg:text-left`)}>
        <div className={classnames(`first-3-columns flex flex-col justify-between
        lg:flex-row lg:min-w-[400px] `)}>

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

        <div className={classnames(`last-column mt-[24px]`)}>
          <button className={classnames(`request-invite-button`)}>
            Request Invite
          </button>
          {/* https://careerkarma.com/blog/html-copyright-symbol/#:~:text=The%20HTML%20copyright%20symbol%20is,not%20represented%20on%20your%20keyboard. */}
          <h6 className={classnames(`mt-[20px] font-[300]`)}><span>&#169;</span> Easybank. All Rights Reserved</h6>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
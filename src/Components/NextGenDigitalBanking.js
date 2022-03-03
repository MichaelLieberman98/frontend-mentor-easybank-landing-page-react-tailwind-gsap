import React from 'react';
import Desktop from '../images/bg-intro-desktop.svg';
import Mobile from '../images/bg-intro-mobile.svg';
import Phones from '../images/image-mockups.png';

import classnames from "classnames";

export default function NextGenDigitalBanking({ paddingLeft, paddingRight }) {
  // const classStr = classnames(
  //   "w-full h-[300px] pt-[30px] pb-[30px] flex flex-row justify-between",
  //   paddingLeft,
  //   paddingRight
  // );
  return (
    <div className={classnames(`w-full h-auto bg-[#FFFFFF] flex 
        sm:flex-col
        md:flex-col
        lg:flex-row-reverse`)}>
      <div className={classnames(`bg-[url('./images/bg-intro-desktop.svg')] bg-cover bg-no-repeat bg-top h-[300px]`)}>
        <img className={classnames(`z-[0]
          sm:max-h-[480px] sm:mx-auto sm:relative sm:top-[-140px]
          md:max-h-[480px] md:mx-auto             md:top-[-140px] md:left-[10px]
          lg:max-h-[500px]                        lg:top-[-140px] lg:left-[10px]`)} src={Phones} alt="phones" />
      </div>
      <div className={classnames(`
        sm:pt-[50px] sm:pb-[80px] sm:w-[300px] sm:mx-auto sm:text-center
        md:pt-[50px] md:pb-[80px] md:w-[300px] md:mx-auto md:text-center
        lg:pt-[30px] lg:pb-[30px] lg:text-left`)}>
        <h1 className={classnames(`text-[30px]`)}>Next generation digital banking</h1>
        <p className={classnames(`text-[18px] mt-[10px]`)}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className={classnames(`request-invite-button text-[18px] mt-[40px]`)}>
          Request Invite
        </button>
      </div>
    </div>
  );
}
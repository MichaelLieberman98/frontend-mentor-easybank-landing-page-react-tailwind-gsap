import React from 'react';
import IconOnline from '../images/icon-online.svg';
import IconBudgeting from '../images/icon-budgeting.svg';
import IconOnboarding from '../images/icon-onboarding.svg';
import IconApi from '../images/icon-api.svg';
import Reason from '../Components/Reason';

import classnames from "classnames";

export default function WhyChooseEasybank({ paddingLeft, paddingRight }) {
  // const classStr = classnames(
  //   "pt-[30px] pb-[30px] flex flex-row justify-between",
  //   paddingLeft,
  //   paddingRight
  // );
  return (
    <div className={classnames(`w-full h-auto bg-[#9698A6] pt-[80px]
      sm:flex sm:flex-col sm:text-center
      md:flex md:flex-col md:text-left`)}>
      <h1 className={classnames(`text-[24px]
        sm:w-[150px] sm:mx-auto
        md:w-auto    md:mx-0    md:ml-[80px]`)}>
        Why choose Easybank?
      </h1>
      <p className={classnames(`
        md:mt-[25px] md:ml-[80px] md:w-[420px] md:text-[12px]`)}>
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
      </p>
      <div className={classnames(`mb-[30px]
        sm:flex sm:flex-col sm:text-center
        md:grid md:grid-rows-2 md:grid-cols-2 md:gap-4 md:mt-[30px] md:mx-[80px]
                            md:text-left
        lg:flex lg:flex-row`)}>
        <Reason icon={IconOnline} reason={"Online Banking"} paragraph={"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} />
        <Reason icon={IconBudgeting} reason={"Simple Budgeting"} paragraph={"See exactly where your money goes each month. Receive notifications when you're close to your hitting limits."} />
        <Reason icon={IconOnboarding} reason={"Fast Onboarding"} paragraph={"We don't do branches. Open your account in minutes online and start taking control of your finances right away."} />
        <Reason icon={IconApi} reason={"Open API"} paragraph={"Manage your savings, investments, pension, and much more from one accoutn. Tracking your money has never been easier."} />
      </div>
    </div>
  );
}
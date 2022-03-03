import React from 'react';

import classnames from "classnames";

export default function WhyChooseEasybank({ icon, reason, paragraph }) {
  return (
    <div className={classnames(`
      sm:mt-[50px]`)}>
      <img className={classnames(`mx-auto
      md:ml-0`)} src={icon} alt="icon" />
      <h3 className={classnames(`mt-[20px]`)}>{reason}</h3>
      <p className={classnames(`mt-[20px]
      sm:w-[90%] sm:mx-auto`)}>{paragraph}</p>
    </div>
  );
}
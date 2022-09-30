import React from 'react';

import classnames from "classnames";

export default function Article({ image, author, articleTitle, paragraph }) {
  return (
    <div className={classnames(`w-[92%] mx-auto mt-[20px] overflow-hidden rounded-[10px] bg-[#FFFFFF]`)}>
      <div className={classnames(`w-full h-[50%] rounded-t-[10px]`)}>
        <img className={classnames(`w-full h-full`)} src={image} alt="article image" />
      </div>
      <div className={classnames(`mt-[30px] mx-[30px] mb-[30px] text-left`)}>
        <h4 className={classnames(`text-[8px]`)}>By {author}</h4>
        <h2 className={classnames(`mt-[10px] text-[12px]`)}>{articleTitle}</h2>
        <p className={classnames(`text-[8px]`)}>{paragraph}</p>
      </div>
    </div>
  );
}
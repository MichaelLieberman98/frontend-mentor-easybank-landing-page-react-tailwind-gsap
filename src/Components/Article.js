import React from 'react';

import classnames from "classnames";

export default function Article({ image, author, articleTitle, paragraph }) {
  return (
    <div className={classnames(`w-[92%] mx-auto mt-[20px] rounded-[4px] bg-[#FFFFFF]`)}>
      <img className={classnames(`w-full h-auto rounded-[10px]`)} src={image} alt="article image" />
      <div className={classnames(`mt-[30px] mx-[30px] mb-[40px]`)}>
        <h4 className={classnames(`text-[8px]`)}>By {author}</h4>
        <h2 className={classnames(`mt-[10px] text-[12px]`)}>{articleTitle}</h2>
        <p className={classnames(`text-[8px]`)}>{paragraph}</p>
      </div>
    </div>
  );
}
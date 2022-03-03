import React from 'react';
import ImageCurrency from '../images/image-currency.jpg';
import ImageRestaurant from '../images/image-restaurant.jpg';
import ImagePlane from '../images/image-plane.jpg';
import ImageConfetti from '../images/image-confetti.jpg';
import Article from '../Components/Article';

import classnames from "classnames";

export default function LatestArticles({ paddingLeft, paddingRight }) {
  const classStr = classnames(`pt-[30px] pb-[30px] flex flex-row justify-between`);
  return (
    <div className={classnames(`bg-[#F3F4F6] pb-[80px]`)}>
      <h1 className={classnames(`mt-[70px] text-[30px] width-auto 
      sm:mx-auto
      md:ml-[80px]`)}>Latest Articles</h1>
      <div className={classnames(`
      sm:flex sm:flex-col sm:text-center
      md:grid md:grid-rows-2 md:grid-cols-2 md:gap-4 md:mt-[30px] md:mx-[80px]
                          md:text-left
      xl:flex lg:flex-row`)}>
        <Article
          image={ImageCurrency}
          author={"Claire Robinson"}
          articleTitle={"Receive money in any currency with no fees"}
          paragraph={"The world is getting smaller and we're becoming more mobile. n\
          So why should you be forced to only receive money in a single ..."} />
        <Article
          image={ImageRestaurant}
          author={"Wilson Hutton"}
          articleTitle={"Treat yourself without worrying about money"}
          paragraph={"Our simple budgeting feature allows you to separate out your n\
          spending and set realistic limits each month. That means you ..."} />
        <Article
          image={ImagePlane}
          author={"Wilson Hutton"}
          articleTitle={"Take your Easybank card wherever you go"}
          paragraph={"We want you to enjoy your travel. This is why we don't charge n\
          any fees on purchases while you're abroad. We'll even show you ..."} />
        <Article
          image={ImageConfetti}
          author={"Claire Robinson"}
          articleTitle={"Our invite-only Beta accounts are now live!"}
          paragraph={"After a lot of hard work by the whole team, we're excited to n\
          launch our closed beta. It's easy to request an invite through the site ..."} />
      </div>
    </div>
  );
}

// { image, author, articleTitle, paragraph }
import React, { useState, useEffect, useRef } from 'react';
import Logo from '../images/logo.svg';

import classnames from "classnames";
import { FiMenu } from 'react-icons/fi';

import { FaTimes } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import { gsap, Power3 } from 'gsap';

export default function Navbar({ paddingLeft, paddingRight }) {
  let [menuState, setMenuState] = useState(true);
  let menu = useRef(null);

  let menuButton = useRef(null);
  let xButton = useRef(null);

  let moveMenu = null;

  // let upDown;
  // let downUp;


  const handleResize = (e) => {
    console.log(window.innerWidth);
  }

  const moveMenuFunc = () => {
    if (window.innerWidth < 600) {
      if (menuState) {
        var menuTL = gsap.timeline();
        menuTL.to(menu, { duration: .4, y: "320px" })
          .to(menuButton, { duration: .4, rotation: -180 });
        // gsap.to(menu, { duration: .4, y: "320px" });
        // gsap.to(menuButton, { duration: .4, rotation: -180 });
        document.getElementById("menu").style.display = "none";
        document.getElementById("ex").style.display = "block";
        gsap.to(menuButton, { duration: .4, rotation: -180 });
      } else {
        gsap.to(menu, { duration: .4, y: "-320px" });
        gsap.to(menuButton, { duration: .4, rotation: 180 });
        document.getElementById("ex").style.display = "none";
        document.getElementById("menu").style.display = "block";
        gsap.to(menuButton, { duration: .4, rotation: 180 });
      }
      setMenuState(!menuState);
    }


    // gsap.to(menuButton, { duration: .4, rotation: 360 });

    // console.log(menuButton);
    // menuButton.current.style.display = "none";
    // xButton.style.display = "block";



  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // let upDown = gsap.to(menu, { duration: .8, y: "-100%" });
    // let downUp = gsap.to(menu, { duration: .8, y: "100%" });

    if (window.innerWidth >= 800) {
      moveMenu = null;
    }

    // (width < 800) ?
    //   moveMenu = () => {
    //     console.log("moving")
    //     menuState ? upDown.play() : downUp.play();
    //   } : moveMenu = null;
  }, []);



  return (
    <div className={classnames(`w-full h-[80px] flex bg-[#FFFFFF] z-[1]
      sm:pl-[30px] sm:pr-[30px]
      md:pl-[40px] md:pr-[40px]
      `)}
    >
      <div className={classnames(`w-full h-[80px] flex flex-row justify-between items-center`)}>

        <img className="h-auto w-[150px]" src={Logo} alt="logo" />
        <ul className={classnames(`menu flex
        sm:flex-col sm:text-center sm:absolute sm:w-[90%] sm:h-[200px] sm:justify-between sm:py-[20px] 
            sm:mx-auto sm:left-0 sm:right-0 sm:top-[-220px] sm:rounded-[5px] sm:z-[-2] sm:bg-[#FFFFFF]
        md:flex-row md:text-center md:relative    md:w-auto  md:h-auto
            md:mx-0 md:left-auto md:right-auto md:top-[0px]
        lg:flex-row lg:text-center lg:relative    lg:w-[auto] lg:h-auto                      lg:py-[0px] lg:top-[0px]`)}
          ref={el => { menu = el }}>
          <li className="mx-4 text-[#9698A6]">Home</li>
          <li className="mx-4 text-[#9698A6]">About</li>
          <li className="mx-4 text-[#9698A6]">Contact</li>
          <li className="mx-4 text-[#9698A6]">Blog</li>
          <li className="mx-4 text-[#9698A6]">Careers</li>
        </ul>
        <button className={classnames(`request-invite-button
      sm:hidden
      md:hidden
      lg:block lg:text-[20px]`)}>
          Request Invite
        </button>

        <div ref={el => {
          menuButton = el;
          // console.log("div menuButton = " + menuButton);
        }}
          className={classnames(`lg:hidden`)}>
          <FiMenu
            id='menu'
            className={classnames(`
      sm:block sm:w-[30px] sm:h-auto
      md:block md:w-[30px] md:h-auto
      lg:hidden`)}
            onClick={moveMenuFunc} />

          <svg
            id='ex'
            className={classnames(`h-6 w-6
        sm:hidden
        md:hidden
        lg:hidden`)}
            onClick={moveMenuFunc}
            ref={el => {
              xButton = el;
              // console.log("x = " + xButton);
            }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>


        {/* <ImCross className={classnames(`
      sm:hidden
      md:hidden
      lg:hidden`)} onClick={moveMenuFunc} /> */}


        {/* <div className={classnames(``)}> */}
        {/* <svg className={classnames(`h-6 w-6
        sm:hidden
        md:hidden
        lg:hidden`)}
          ref={el => {
            xButton = el;
            console.log("x = " + xButton);
          }}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg> */}
        {/* </div> */}


      </div>
    </div>
  );
}
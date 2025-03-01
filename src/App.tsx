import React from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { PiCaretUpBold } from "react-icons/pi";

import { MdClose, MdOutlineMenu } from "react-icons/md";
import Logo from "./assets/Utica-Capital-Dark background 2.webp";
import BgImage from "./assets/UCAF-Website-3.webp";
import BgImage2 from "./assets/Horla-Website3.webp";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ImArrowDownRight2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useBlogCardAnimation } from "./hooks/animations/useBlogCardAnimation";
import { useServiceAnimation } from "./hooks/animations/useServiceAnimation";
import {
  blogLists,
  footerLinks,
  navLinks,
  productLinks,
  serviceLists,
  socialMediaLinks,
} from "./constants";

gsap.registerPlugin(CSSPlugin);

const images = [BgImage, BgImage2];

const App: React.FC = () => {
  const navigate = useNavigate();
  const navRef = React.useRef<HTMLDivElement>(null);
  const animateServiceSectionRef = React.useRef<HTMLDivElement>(null);
  const linkRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuToggleRef = React.useRef<HTMLDivElement>(null);
  const imageCoverRef = React.useRef<HTMLDivElement>(null);
  const animateNextAndPrevButtonRef = React.useRef<HTMLDivElement>(null);
  const animateNextBgImageRef = React.useRef<HTMLButtonElement>(null);
  const animatePreviousBgImageRef = React.useRef<HTMLButtonElement>(null);
  const animateServiceButtonRefs = React.useRef<(HTMLButtonElement | null)[]>(
    []
  );
  const serviceCardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const blogCardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const [navModal, setNavModal] = React.useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.8 },
    });

    tl.fromTo(navRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(
        linkRefs.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=1"
      )
      .fromTo(
        imageCoverRef.current,
        { height: "100%" },
        { height: "0%" },
        "<0.6"
      )
      .fromTo(
        animateNextAndPrevButtonRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "back.inOut(1.7)",
        },
        "<"
      )
      .fromTo(
        animateServiceSectionRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "back.inOut(1.7)",
        },
        "<0.5"
      );
  }, []);

  useServiceAnimation(serviceCardRefs);

  useBlogCardAnimation(blogCardRefs);

  const toggleMobileMenu = () => {
    const toggleMobileMenuTimeline = gsap.timeline({
      defaults: { ease: "power4.out" },
    });
    setMobileMenu(!mobileMenu);
    if (!mobileMenu) {
      toggleMobileMenuTimeline
        .to(mobileMenuToggleRef.current, {
          rotate: 180,
          duration: 0.5,
        })
        .to(mobileMenuRef.current, {
          x: 0,
          duration: 0.3,
        });
    } else {
      toggleMobileMenuTimeline.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.3,
      });
    }
  };

  const animateNextAndPreviousBgImage = (
    element: HTMLElement,
    borderColor: string = "#6bc328"
  ) => {
    gsap.to(element, {
      scale: 1,
      duration: 0.5,
      border: `4px solid ${borderColor}`,
      ease: "power4.out",
    });
  };

  const resetButtonAnimation = (
    element: HTMLElement,
    borderColor: string = "#6bc328"
  ) => {
    gsap.to(element, {
      scale: 0.8,
      duration: 0.3,
      border: `2px solid ${borderColor}`,
      ease: "power4.out",
    });
  };

  const nextBgImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousBgImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="bg-uticaBgGray w-full flex flex-col gap-8 font-bold ">
      {/* nav section */}
      <section className="bg-uticaBgGray border-none sticky top-0 z-50 md:py-5 md:px-8 lg:px-22 xl:px-42">
        <nav
          ref={navRef}
          className="w-full flex justify-between place-items-center pr-4 md:px-10 py-3 bg-uticaBlue md:rounded-full"
        >
          <div className="h-11 w-32">
            <a href="/">
              <img
                className="h-full w-full object-cover"
                src={Logo}
                alt="Utica capital limited logo"
              />
            </a>
          </div>
          <div
            role="button"
            className="md:hidden block"
            ref={mobileMenuToggleRef}
            onClick={toggleMobileMenu}
          >
            <MdOutlineMenu color="#fff" size={24} />
          </div>

          <div className="hidden md:block">
            <ul className="flex justify-center place-items-center md:gap-5 lg:gap-10">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                >
                  {navLink.icon ? (
                    <button
                      className="text-white flex items-center gap-2"
                      onClick={() => {
                        setNavModal(!navModal);
                      }}
                    >
                      {navLink.name}
                      <span className="pt-0.5">
                        {navModal ? (
                          <PiCaretUpBold strokeWidth={10} size={15} />
                        ) : (
                          navLink.icon
                        )}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={navLink.link}
                      className="text-white relative group"
                    >
                      {navLink.name}
                      <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] rounded-3xl bg-uticaGreen transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )}
                  {navLink.icon && navModal && (
                    <div className="absolute z-50 top-12 md:-left-16 lg:-left-5 bg-uticaBlue rounded-lg">
                      <ul className="flex flex-col gap-2">
                        {productLinks.map((productLink, index) => (
                          <li
                            key={index}
                            className="w-80 px-6 py-4 border-b border-white last:border-b-0"
                          >
                            <a
                              href={productLink.link}
                              className="text-white flex items-center gap-6"
                            >
                              {productLink.icon}
                              {productLink.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>

      {/* mobile menu */}
      <section
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-[100%] h-full bg-uticaBlue text-white z-50 transform translate-x-full transition-transform md:hidden"
      >
        <div className="flex justify-between items-center py-6 px-3">
          <div className="w-full flex justify-end">
            <button onClick={toggleMobileMenu}>
              <MdClose size={28} />
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-4 pl-10 pr-4 mt-8">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              {navLink.icon ? (
                <button
                  className="text-white text-2xl flex items-center gap-2"
                  onClick={() => setNavModal(!navModal)}
                >
                  {navLink.name}
                  <span className="pt-0.5 pl-2">{navLink.icon}</span>
                </button>
              ) : (
                <a
                  href={navLink.link}
                  className="text-white block py-2 text-2xl"
                >
                  {navLink.name}
                </a>
              )}
              {navLink.icon && navModal && (
                <div className="mt-5 bg-uticaBlue border border-white rounded-lg">
                  <ul className="flex flex-col gap-2">
                    {productLinks.map((productLink, index) => (
                      <li
                        key={index}
                        className="px-6 py-4 border-b border-white last:border-b-0"
                      >
                        <a
                          href={productLink.link}
                          className="text-white flex items-center gap-6"
                        >
                          {productLink.icon}
                          {productLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 mb-10 md:mb-16 md:px-8 lg:px-22 xl:px-42">
        <section className="h-[30dvh] md:h-[45dvh] lg:h-[58dvh] xl:h-[65dvh] w-full rounded-3xl">
          <div
            ref={imageCoverRef}
            className="absolute w-full h-full bg-uticaBgGray"
          ></div>
          <img
            className="h-full w-full object-center rounded-2xl"
            src={images[currentImageIndex]}
            alt="Utica Capital Limited"
          />
        </section>
        {/* Next and previous background image buttons */}
        <div
          ref={animateNextAndPrevButtonRef}
          className="w-full flex justify-between items-center mt-8"
        >
          <button
            className="border-2 border-uticaGreen scale-[0.8] text-white h-12 w-12 flex justify-center place-items-center rounded-full"
            onClick={previousBgImage}
            onMouseEnter={() =>
              animateNextAndPreviousBgImage(animatePreviousBgImageRef.current!)
            }
            onMouseLeave={() =>
              resetButtonAnimation(animatePreviousBgImageRef.current!)
            }
            onTouchStart={() =>
              animateNextAndPreviousBgImage(animatePreviousBgImageRef.current!)
            }
            onTouchEnd={() =>
              resetButtonAnimation(animatePreviousBgImageRef.current!)
            }
            ref={animatePreviousBgImageRef}
          >
            <FaArrowLeftLong color="#6bc328" size={24} />
          </button>

          <button
            className="border-2 border-uticaGreen scale-[0.8] text-white h-12 w-12 flex justify-center place-items-center rounded-full"
            onClick={nextBgImage}
            onMouseEnter={() =>
              animateNextAndPreviousBgImage(animateNextBgImageRef.current!)
            }
            onMouseLeave={() =>
              resetButtonAnimation(animateNextBgImageRef.current!)
            }
            onTouchStart={() =>
              animateNextAndPreviousBgImage(animateNextBgImageRef.current!)
            }
            onTouchEnd={() =>
              resetButtonAnimation(animateNextBgImageRef.current!)
            }
            ref={animateNextBgImageRef}
          >
            <FaArrowRightLong color="#6bc328" size={24} />
          </button>
        </div>
        {/* Services Section */}
        <section
          ref={animateServiceSectionRef}
          className="w-full flex flex-col place-items-center gap-8 mt-8 py-6"
        >
          <p className="text-2xl xl:text-3xl text-center text-uticaBlue">
            Strategic Financial Solutions Designed for Your Success
          </p>
          <section className="w-full px-10 md:px-20 lg:px-28 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {serviceLists.map((serviceListItem, index) => {
              const isSmallScreen = window.innerWidth < 640;

              const backgroundColorClass = isSmallScreen
                ? index % 2 === 0
                  ? "bg-uticaBlue"
                  : "bg-uticaGreen"
                : serviceListItem.name === "Portfolio Advisory" ||
                  serviceListItem.name === "Fund Management"
                ? "bg-uticaBlue"
                : "bg-uticaGreen";
              return (
                <div
                  key={index}
                  className="h-full w-full flex flex-col gap-3 mb-3"
                  ref={(el) => {
                    serviceCardRefs.current[index] = el;
                  }}
                >
                  <div
                    className={`${backgroundColorClass} w-full min-h-[300px] md:min-h-[350px] lg:min-h-[410px] flex flex-col justify-between text-white  rounded-2xl py-3 lg:py-5 px-6`}
                  >
                    <div className="flex flex-col gap-4">
                      <p className="mt-4 lg:text-2xl">{serviceListItem.name}</p>
                      <p className="font-normal text-sm md:text-base lg:text-lg">
                        {serviceListItem.description}
                      </p>
                    </div>

                    <div className="w-full flex justify-end">
                      <button
                        className="border-2 border-white scale-[0.8] text-white h-12 w-12 md:h-14 md:w-14 flex justify-center place-items-center rounded-full"
                        onClick={() => {
                          nextBgImage();
                          navigate(serviceListItem.link);
                        }}
                        onMouseEnter={() =>
                          animateNextAndPreviousBgImage(
                            animateServiceButtonRefs.current[index]!,
                            "#fff"
                          )
                        }
                        onMouseLeave={() =>
                          resetButtonAnimation(
                            animateServiceButtonRefs.current[index]!,
                            "#fff"
                          )
                        }
                        onTouchStart={() =>
                          animateNextAndPreviousBgImage(
                            animateServiceButtonRefs.current[index]!,
                            "#fff"
                          )
                        }
                        onTouchEnd={() =>
                          resetButtonAnimation(
                            animateServiceButtonRefs.current[index]!,
                            "#fff"
                          )
                        }
                        ref={(el) => {
                          animateServiceButtonRefs.current[index] = el;
                        }}
                      >
                        <ImArrowDownRight2 color="#fff" size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
        {/* blog section */}
        <section className="w-full flex flex-col gap-8 mt-8 bg-white rounded-2xl py-6 sm:py-12 px-3.5 sm:px-8">
          <div className="flex justify-between place-items-center mb-3">
            <p className="text-lg md:text-2xl xl:text-3xl text-uticaBlue">
              Recent blog post
            </p>
            <button className="border-2 border-uticaGreen hover:bg-uticaGreen text-uticaGreen hover:text-white rounded-lg px-4 py-1">
              <a
                href="/blog"
                className=" text-xs sm:text-sm font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/blog");
                }}
              >
                Read More
              </a>
            </button>
          </div>

          <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 xl:gap-12">
            {blogLists.slice(0, 6).map((blogListItem, index) => (
              <div
                key={index}
                className="h-full w-full flex flex-col gap-4 rounded-2xl"
                onClick={() => navigate(blogListItem.link)}
                ref={(el) => {
                  blogCardRefs.current[index] = el;
                }}
              >
                <div className="h-48 w-full bg-uticaBgGray rounded-2xl">
                  {blogListItem.image}
                </div>
                <p className="text-xs md:text-sm text-uticaGray relative group">
                  {blogListItem.date}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] rounded-3xl bg-uticaGreen transition-all duration-300 group-hover:w-[90px]"></span>
                </p>
                <p className="text-sm md:text-lg text-black">
                  {blogListItem.title}
                </p>
              </div>
            ))}
          </section>
        </section>
        {/* sign up for our newsletter */}
        <section className="w-full sm:flex justify-between sm:place-items-center mt-10 py-10 sm:py-20 bg-uticaBlue rounded-2xl px-4 md:px-8 lg:px-14">
          <div className="sm:w-[37%] lg:w-[45%] flex flex-col gap-3">
            <p className="text-white text-2xl xl:text-4xl">
              Subscribe to our newsletter
            </p>
            <p className="flex flex-col gap-1 text-uticaBgGray text-xs md:text-sm">
              Stay ahead with the latest investment insights from Utica Capital
              Limited.
              <span className="text-uticaGreen">Subscribe now!</span>
            </p>
          </div>

          {/* small screen input and button */}
          <div className="sm:hidden w-full flex flex-col gap-4 mt-8">
            <input
              type="email"
              placeholder="Your email..."
              className="h-12 w-full px-4 bg-uticaBgGray placeholder:text-gray-400 sm:bg-none focus:outline-none rounded-xl"
            />
            <button className="h-12 w-[60%] bg-uticaGreen text-white focus:outline-none rounded-lg">
              Sign Up For Free
            </button>
          </div>

          {/* bigger screen input and button */}
          <div className="hidden sm:w-[53%] lg:w-[48%] h-16 py-2 pr-2 sm:flex place-items-center bg-uticaBgGray rounded-xl">
            <input
              type="email"
              placeholder="Your email..."
              className="h-12 w-[60%] px-4 bg-none focus:outline-none rounded-full"
            />
            <button className="h-12 w-[40%] sm:text-xs md:text-sm xl:text-base bg-uticaGreen text-white focus:outline-none rounded-lg">
              Sign Up For Free
            </button>
          </div>
        </section>
        {/* Footer section with products,services, company and contact */}
        <section className="w-full h-full mt-26">
          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 pt-6 pb-10 border-b border-uticaGray">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-4">
                <p className="text-2xl text-[#082552]">{section}</p>
                <ul className="flex flex-col gap-2">
                  {links.map((linkItem, index) => (
                    <li key={index}>
                      <a
                        href={linkItem.link}
                        className="text-uticaGray font-normal"
                      >
                        {linkItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-between gap-8 py-8">
            <div className="lg:w-1/2 flex flex-col gap-2 text-xs text-uticaGray font-normal">
              <p>
                Utica Capital Limited ⎯
                <span className="text-uticaBlue"> RC 1680942</span> is an asset
                management company, licensed by the Securities and Exchange
                Commission (SEC) under the Investment and Securities Act (ISA)
                2007 to provide top-notch investment and fund management
                services to High Networth Individuals, Corporates, mass affluent
                and retail clients in Nigeria. The company has its head office
                in Ikoyi, Lagos State and offers varying investment products
                including equities, fixed income, asset management, and other
                alternative investment asset classes.
              </p>
            </div>

            <div className="lg:w-1/2 flex flex-col lg:place-items-end gap-2 text-sm text-uticaGray font-normal">
              <div className="flex gap-4">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.link.split(".")[1]} page`}
                    className="text-uticaBlue text-lg hover:text-uticaGreen transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p>124, Norman Williams Street, Ikoyi, Lagos, Nigeria</p>
              <p>info@uticacap.com</p>
              <p>+(234) 703 164 8649</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-normal">
              © 2025 Utica Capital Limited. All rights reserved.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default App;

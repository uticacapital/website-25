import React from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

import { PiCaretUpBold } from "react-icons/pi";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import Logo from "./assets/Utica-Capital-Dark background 2.webp";

import {
  footerLinks,
  navLinks,
  productLinks,
  socialMediaLinks,
} from "./constants";
import { Outlet } from "react-router-dom";

gsap.registerPlugin(CSSPlugin);

const App: React.FC = () => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const linkRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuToggleRef = React.useRef<HTMLDivElement>(null);

  const [navModal, setNavModal] = React.useState<boolean>(false);
  const [menuRotated, setMenuRotated] = React.useState<boolean>(false);
  React.useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.8 },
    });

    tl.fromTo(
      navRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0 }
    ).fromTo(
      linkRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "-=1"
    );
  }, []);

  const toggleMobileMenu = () => {
    const toggleMobileMenuTimeline = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.5 },
    });

    setMenuRotated((prev) => !prev);

    toggleMobileMenuTimeline
      .set(mobileMenuToggleRef.current, { transformOrigin: "center" })
      .fromTo(
        mobileMenuToggleRef.current,
        { rotate: menuRotated ? 180 : 0 },
        { rotate: menuRotated ? 0 : 180, duration: 0.2 }
      )
      .fromTo(
        mobileMenuRef.current,
        { x: menuRotated ? 0 : "100%", duration: 0.3 },
        {
          x: menuRotated ? "100%" : 0,
          duration: 0.3,
          ease: "power3.inOut",
        }
      );
  };

  return (
    <main className="bg-uticaBgGray w-full flex flex-col gap-8 font-bold">
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
        <main>
          <Outlet />
        </main>
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
        <section className="w-full h-full mt-12 sm:mt-26">
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

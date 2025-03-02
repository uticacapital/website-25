import React from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ImArrowDownRight2 } from "react-icons/im";
import BgImage from "@/assets/UCAF-Website-3.webp";
import BgImage2 from "@/assets/Horla-Website3.webp";

import { useBlogCardAnimation } from "../hooks/animations/useBlogCardAnimation";
import { useServiceAnimation } from "../hooks/animations/useServiceAnimation";
import { blogLists, serviceLists } from "../constants";

gsap.registerPlugin(CSSPlugin);

const images = [BgImage, BgImage2];

const App: React.FC = () => {
  const navigate = useNavigate();
  const animateServiceSectionRef = React.useRef<HTMLDivElement>(null);
  const animateYoutubeSectionRef = React.useRef<HTMLDivElement>(null);
  const animateBlogSectionRef = React.useRef<HTMLDivElement>(null);
  const imageCoverRef = React.useRef<HTMLDivElement>(null);
  const animateNextAndPrevButtonRef = React.useRef<HTMLDivElement>(null);
  const animateNextBgImageRef = React.useRef<HTMLButtonElement>(null);
  const animatePreviousBgImageRef = React.useRef<HTMLButtonElement>(null);
  const animateServiceButtonRefs = React.useRef<(HTMLButtonElement | null)[]>(
    []
  );
  const serviceCardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const blogCardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const homepageAnimation = gsap.timeline({ delay: 0.8 });

    homepageAnimation
      .fromTo(imageCoverRef.current, { height: "100%" }, { height: "0%" })
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

  React.useEffect(() => {
    const youtubeAndBlogSectionTimeline = gsap.timeline({ duration: 0.6 });
    youtubeAndBlogSectionTimeline
      .fromTo(
        animateYoutubeSectionRef.current,
        {
          opacity: 0.6,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: animateYoutubeSectionRef.current,
            start: "top 95%",
            end: "bottom 75%",
            toggleActions: "play none none reverse",
            once: true,
            scrub: 1,
          },
        }
      )
      .fromTo(
        animateBlogSectionRef.current,
        {
          opacity: 0.7,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: animateBlogSectionRef.current,
            start: "top 95%",
            end: "bottom 75%",
            toggleActions: "play none none reverse",
            once: true,
            scrub: 1,
          },
        }
      );
  }, []);

  useBlogCardAnimation(blogCardRefs);

  const animateScalingOutRoundButtons = (
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
    <>
      <section className="h-[30dvh] md:h-[48dvh] sm:h-[50dvh] lg:h-[58dvh] xl:h-[65dvh] w-full rounded-3xl">
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
          aria-label="Previous background image"
          onMouseEnter={() =>
            animateScalingOutRoundButtons(animatePreviousBgImageRef.current!)
          }
          onMouseLeave={() =>
            resetButtonAnimation(animatePreviousBgImageRef.current!)
          }
          onTouchStart={() =>
            animateScalingOutRoundButtons(animatePreviousBgImageRef.current!)
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
          aria-label="Next background image"
          onMouseEnter={() =>
            animateScalingOutRoundButtons(animateNextBgImageRef.current!)
          }
          onMouseLeave={() =>
            resetButtonAnimation(animateNextBgImageRef.current!)
          }
          onTouchStart={() =>
            animateScalingOutRoundButtons(animateNextBgImageRef.current!)
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
                      aria-label="Read more about our services"
                      onClick={() => {
                        nextBgImage();
                        navigate(serviceListItem.link);
                      }}
                      onMouseEnter={() =>
                        animateScalingOutRoundButtons(
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
                        animateScalingOutRoundButtons(
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

      {/* Youtube video section */}
      <section
        ref={animateYoutubeSectionRef}
        className="w-full grid lg:grid-cols-2 gap-10 mt-8 py-3 lg:py-16 place-items-center"
      >
        <p className="w-full text-lg md:text-2xl xl:text-3xl text-uticaBlue text-center lg:text-start">
          Watch our video
        </p>

        <div className="w-full max-w-3xl bg-white rounded-2xl p-4 overflow-hidden">
          <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/QaMDCTFc7I0?si=xI3T5sAhA0QKWWxp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* blog section */}
      <section
        ref={animateBlogSectionRef}
        className="w-full flex flex-col gap-8 mt-8 bg-white rounded-2xl py-6 sm:py-12 px-3.5 sm:px-8"
      >
        <div className="flex justify-between place-items-center mb-3">
          <p className="text-lg md:text-2xl xl:text-3xl text-uticaBlue">
            Recent blog post
          </p>
          <button className="border-2 border-uticaGreen hover:bg-uticaGreen text-uticaGreen hover:text-white hover:scale-[1.1] rounded-lg px-4 py-1">
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
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import gsap from "gsap";
import { coreValues } from "../constants";

const AboutPage: React.FC = () => {
  const rotateIconRef = React.useRef<(HTMLDivElement | null)[]>([]);
  const moveTextRef = React.useRef<(HTMLDivElement | null)[]>([]);
  const aboutUsRef = React.useRef<HTMLDivElement | null>(null);
  const valuesRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8, ease: "back.inOut(1.7)" });
    tl.fromTo(
      aboutUsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
      }
    );
    tl.fromTo(
      valuesRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "<0.5"
    );
  }, []);

  return (
    <>
      <section ref={aboutUsRef}>
        <p className="text-uticaBlue text-3xl sm:text-5xl text-center">
          About Utica Capital
        </p>
        <div className="w-full space-y-4 font-[500] mt-8">
          <p>
            Utica Capital Limited is an asset management company, licensed as a
            fund/portfolio management firm by the Securities and Exchange
            Commission (SEC), Nigeria under the Investment and Securities Act
            (ISA) 2007 to provide top-notch investment and fund/portfolio
            management services to individuals/institutions, corporate, and the
            mass affluent.
          </p>
          <p>
            The company has its head office in Ikoyi, Lagos State and offer
            varying investment products around equities, fixed income, asset
            management, and other alternative investment asset classes.
          </p>
          <p>
            The firm’s competitive advantage is its people; in terms of skills,
            knowledge and education, network/connections and presence in the
            investment industry in Nigeria and the world. The business of wealth
            management is based on trust, and the leadership of Utica have
            garnered this trust over the years. The firm’s focus is on building
            its brand to a household name, speed in service delivery to attain
            customer satisfaction and new market penetration.
          </p>
          <p>
            Our goal is to help our clients achieve their goals of creation,
            accumulation, preservation, and transfer of wealth. Our vision
            reflects our values; integrity, fairness, teamwork, impact, and
            quality service.
          </p>
        </div>
      </section>

      {/* vision and mission */}
      <section
        ref={valuesRef}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-16 font-[500]"
      >
        {coreValues.map((value, index) => (
          <div
            role="button"
            onMouseEnter={() => {
              gsap.to(rotateIconRef.current[index]!, {
                duration: 0.5,
                scale: 1.1,
                rotation: 360,
                ease: "power4.out",
              });

              gsap.to(moveTextRef.current[index]!, {
                x: 10,
              });
            }}
            onMouseLeave={() => {
              gsap.to(rotateIconRef.current[index]!, {
                duration: 0.5,
                scale: 1,
                rotation: 0,
                ease: "power4.out",
              });
              gsap.to(moveTextRef.current[index]!, {
                x: 0,
              });
            }}
            key={value.id}
            className="bg-white py-6 px-6 md:px-8 rounded-2xl flex items-start md:items-center gap-6 shadow-md"
          >
            <div
              ref={(el) => {
                rotateIconRef.current[index] = el;
              }}
              className="bg-uticaGreen p-4 rounded-full flex items-center justify-center"
            >
              {value.icon}
            </div>
            <div
              ref={(el) => {
                moveTextRef.current[index] = el;
              }}
              className="space-y-3"
            >
              <p className="text-uticaBlue text-xl md:text-2xl font-bold">
                {value.title}
              </p>
              <p className="leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutPage;

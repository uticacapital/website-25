import React, { useEffect } from "react";
import gsap from "gsap";
import { coreValues } from "../constants";
import { IoClose } from "react-icons/io5";
import { boardMembers } from "../constants";
import { BoardMember } from "../types";
import { FaLinkedin } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const rotateIconRef = React.useRef<(HTMLDivElement | null)[]>([]);
  const moveTextRef = React.useRef<(HTMLDivElement | null)[]>([]);
  const aboutUsRef = React.useRef<HTMLDivElement | null>(null);
  const valuesRef = React.useRef<HTMLDivElement | null>(null);
  const boardMembersRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedMember, setSelectedMember] =
    React.useState<BoardMember | null>(null);

  React.useEffect(() => {}, []);

  const openModal = (member: BoardMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    gsap.to(".modal-content", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setSelectedMember(null),
    });
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8, ease: "back.inOut(1.7)" });
    tl.fromTo(
      aboutUsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
      }
    )
      .fromTo(
        valuesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "<0.5"
      )
      .fromTo(
        boardMembersRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
        }
      );
  }, []);

  return (
    <>
      <section ref={aboutUsRef}>
        <p className="text-uticaBlue text-4xl sm:text-5xl text-center">
          About Utica Capital
        </p>
        <div className="w-full space-y-4 font-[500] mt-8 text-base">
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

      {/* Board Members Section */}
      <section ref={boardMembersRef} className="py-8">
        <p className="text-uticaBlue text-4xl sm:text-5xl text-center font-bold">
          Our Board of Directors
        </p>

        {/* Board Members Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12  text-center">
          {boardMembers.slice(0, 2).map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center cursor-pointer py-8 bg-white rounded-2xl hover:scale-105 transition-transform duration-300 delay-200 ease-in-out"
              onClick={() => openModal(member)}
            >
              {member.image}
              <p className="text-lg font-bold mt-4 text-uticaBlue">
                {member.name}
              </p>
              <p className="text-sm text-black">{member.title}</p>
            </div>
          ))}
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12  text-center">
          {boardMembers.slice(2).map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center cursor-pointer py-8 bg-white rounded-2xl hover:scale-105 transition-transform duration-300 delay-200 ease-in-out"
              onClick={() => openModal(member)}
            >
              {member.image}
              <p className="text-lg font-bold mt-4 text-uticaBlue">
                {member.name}
              </p>
              <p className="text-sm text-black">{member.title}</p>
            </div>
          ))}
        </section>
      </section>

      {/* Board of Directors Modal */}
      {selectedMember && (
        <div
          style={{
            backdropFilter: "blur(4px)",
          }}
          className="fixed inset-0 flex items-center justify-center bg-[#1616161A] z-50"
          onClick={closeModal}
        >
          <div
            className="modal-content bg-white w-[90%] sm:w-[50%] h-[70%]  overflow-y-scroll no-scrollbar pb-16 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="sticky top-0 bg-white py-4 pr-2 w-full flex justify-end">
              <button onClick={closeModal}>
                <IoClose size={30} />
              </button>
            </div>

            {/* Modal Content */}
            <div className=" flex flex-col px-8">
              {selectedMember.image}
              <div className="flex place-items-end gap-2">
                <h2 className="text-2xl font-bold text-uticaBlue mt-4 ">
                  {selectedMember.name}
                </h2>
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-1.5"
                >
                  <FaLinkedin size={18} color="#01225a" />
                </a>
              </div>

              <p className="text-base">{selectedMember.title}</p>
              <div className="mb-4 mt-2">
                {selectedMember.description.map((desc, index) => (
                  <p
                    key={index}
                    className="text-black font-[500] text-base mt-3 leading-7"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;

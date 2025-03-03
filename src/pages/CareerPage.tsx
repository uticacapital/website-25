import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageOne from "../assets/IMG_5931.webp";
import ImageTwo from "../assets/IMG_5932.webp";
import ImageThree from "../assets/IMG_5934.webp";
import ImageFour from "../assets/IMG_5958.webp";
// import ImageFive from "../assets/IMG_5959.webp";
import ImageSix from "../assets/IMG_5948.webp";
import { useBlogCardAnimation } from "../hooks/animations/useBlogCardAnimation";
import { IoClose } from "react-icons/io5";
import { jobPostings } from "../constants";
import { JobPosting } from "../types";

gsap.registerPlugin(ScrollTrigger);

const CareerPage: React.FC = () => {
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const jobPostingsRef = useRef<HTMLDivElement>(null);
  const joinUsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const jobPostCardRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8, ease: "back.inOut(1.7)" });
    tl.fromTo(
      joinUsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
      }
    );
    tl.fromTo(
      galleryRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "<0.5"
    );
  }, []);

  useBlogCardAnimation(jobPostCardRefs);

  const scrollToJobPostings = () => {
    jobPostingsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleJobDetails = (index: number) => {
    setExpandedJobIndex(expandedJobIndex === index ? null : index);
  };
  const openModal = (job: JobPosting) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };
  return (
    <>
      <section
        className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center bg-uticaBlue rounded-2xl text-white"
        ref={joinUsRef}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6 rounded-2xl">
          <h1 className="text-4xl font-bold text-center">
            Join Our Team at Utica Capital
          </h1>
          <p className="mt-3 text-lg text-center">
            Be part of something amazing. Explore career opportunities today.
          </p>
          <button
            onClick={scrollToJobPostings}
            className="mt-5 bg-uticaGreen text-white px-6 py-3 rounded-lg"
          >
            View Open Positions
          </button>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section
        ref={galleryRef}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
      >
        {/* Left-side Grid (Large Grid) */}
        <section className="md:col-span-2 grid grid-cols-2 gap-4">
          {[ImageOne, ImageThree, ImageFour, ImageTwo].map((image, index) => (
            <div
              key={index}
              className="relative w-full md:h-[300px] rounded-2xl overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                src={image}
                alt={`Utica Capital Image ${index + 1}`}
              />
            </div>
          ))}
        </section>

        {/* Right-side Large Image */}
        <section className="md:col-span-1">
          <div className="relative w-full md:h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-center rounded-2xl transition-transform duration-300 hover:scale-105"
              src={ImageSix}
              alt={`Utica Capital Image ${ImageSix}`}
            />
          </div>
        </section>
      </section>

      {/* placeholder to ensure the scrollIntoView ends before the beginning of the job postings section */}
      <div ref={jobPostingsRef}></div>

      {/* job posting section */}
      <div className="w-full h-full flex flex-col gap-4 mt-26 text-center">
        <p className="text-uticaBlue text-5xl">
          Are you innovative and impact-driven?
        </p>
        <p className="text-black font-[500]">
          Join our dynamic team and embark on a journey of innovation, growth
          and collaboration. Explore exciting opportunities to contribute your
          talents and shape the future with us.
        </p>
      </div>

      <ul className="job-postings w-full h-full grid grid-cols-1 gap-4 mt-10">
        {jobPostings.map((jobPosting, index) => (
          <li
            key={index}
            ref={(el) => {
              jobPostCardRefs.current[index] = el;
            }}
            className="job-posting w-full h-full flex flex-col bg-white py-5 px-2 sm:px-7 rounded-xl shadow-md"
          >
            <section className="w-full h-full grid grid-cols-1 sm:flex justify-between place-items-center gap-4">
              <div className="w-full h-full flex justify-between sm:flex-col sm:gap-8">
                <h2>{jobPosting.title}</h2>
                <div className="h-full grid grid-cols-1 justify-between place-items-end sm:flex sm:justify-start gap-2 text-xs ">
                  <p className="sm:bg-uticaBlue sm:text-white sm:px-4 sm:py-0.5 sm:rounded-full">
                    {jobPosting.job_location}
                  </p>
                  <p className="sm:bg-uticaBlue sm:text-white sm:px-4 sm:py-0.5 sm:rounded-full">
                    {jobPosting.job_type}
                  </p>
                </div>
              </div>

              <div className="w-full h-full flex justify-end place-items-center ">
                <button
                  className="apply-button bg-uticaGreen text-white px-4 sm:px-3 sm:py-1.5 rounded-full hover:bg-green-700 transitio text-sm"
                  onClick={() => toggleJobDetails(index)}
                >
                  {expandedJobIndex === index
                    ? "Hide Details"
                    : "View Job Details"}
                </button>
              </div>
            </section>

            {/* Job Details Expandable Section */}
            {expandedJobIndex === index && (
              <>
                <section className="mt-4 p-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    Job Summary
                  </h3>
                  <p className="text-black font-[500] text-sm">
                    {jobPosting.job_summary}
                  </p>
                  <h3 className="text-lg font-semibold mt-4  mb-2">
                    Job Details
                  </h3>
                  <ul className="list-disc pl-6">
                    {jobPosting.job_details.responsibilities.map((task, i) => (
                      <li key={i} className="text-black font-[500] text-sm">
                        {task}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-semibold mt-4  mb-2">
                    Required Qualifications
                  </h3>
                  <p className="text-black font-[500] text-sm">
                    {jobPosting.required_qualifications.education}
                  </p>
                  <p className="text-black font-[500] text-sm">
                    {jobPosting.required_qualifications.certifications}
                  </p>
                  <h3 className="text-lg font-semibold mt-4  mb-2">
                    Job Factors
                  </h3>
                  <h4 className="font-semibold">Knowledge</h4>
                  <ul className="list-disc pl-6">
                    {jobPosting.job_factors.knowledge.map((item, i) => (
                      <li key={i} className="text-black font-[500] text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-semibold my-2">Abilities</h4>
                  <ul className="list-disc pl-6">
                    {jobPosting.job_factors.abilities.map((item, i) => (
                      <li key={i} className="text-black font-[500] text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-semibold my-2">
                    Key Working Relationships
                  </h4>
                  <ul className="list-disc pl-6">
                    {jobPosting.job_factors.key_working_relationships.map(
                      (item, i) => (
                        <li key={i} className="text-black font-[500] text-sm">
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <p className="mt-4 text-black font-[500] text-sm">
                    {jobPosting.compensation}
                  </p>
                </section>
                <div className="w-full h-full flex justify-center place-items-center mt-10 mb-6">
                  <button
                    className="bg-uticaGreen text-white py-1 px-4 rounded-md hover:bg-green-700 transition"
                    onClick={() => openModal(jobPosting)}
                  >
                    Apply Now
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {/* Application Modal */}
      {modalOpen && selectedJob && (
        <div
          style={{
            backdropFilter: "blur(4px)",
          }}
          className="fixed inset-0 flex items-center justify-center bg-[#1616161A] z-50"
        >
          <div className="bg-white w-[90%] md:w-[50%] px-6 py-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-2xl font-semibold text-uticaBlue">
              {selectedJob.title}
            </h2>
            <p className="text-xs text-gray-500">
              {selectedJob.job_location} | {selectedJob.job_type}
            </p>
            <p className="mt-4 text-black font-[500] text-sm">
              {selectedJob.job_summary}
            </p>

            {/* Application Form */}
            <form className="mt-8 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border outline-none p-2 rounded-md w-full"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border outline-none p-2 rounded-md w-full"
                required
              />
              <textarea
                placeholder="Tell us something interesting about yourself"
                className="border outline-none p-2 rounded-md w-full h-24"
                required
              ></textarea>
              <input
                type="file"
                className="border p-2 outline-none rounded-md w-full"
                required
              />
              <div className="w-full h-full flex justify-center place-items-center mt-10 mb-6">
                <button
                  type="submit"
                  className="bg-uticaGreen text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerPage;

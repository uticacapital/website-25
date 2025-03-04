import React from "react";
import { serviceLists } from "../constants";
import { NavLink, useParams } from "react-router-dom";

const Services: React.FC = () => {
  const { serviceId } = useParams();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  console.log(serviceId);
  return (
    <>
      <main className="w-full grid md:flex gap-[3%]">
        {/* service menu bar */}
        <section className="md:w-[30%] h-70 bg-white py-6 rounded-2xl">
          <p className="text-uticaBlue text-4xl sm:text-2xl font-bold mx-6">
            Services
          </p>
          <ul className="mt-4 pl-6">
            {serviceLists.map((service) => (
              <li key={service.name} className="w-full flex flex-col gap-2">
                <NavLink
                  to={service.link}
                  aria-label={service.name}
                  className={({ isActive }) =>
                    `w-full border-r-4 py-2.5 ${
                      isActive
                        ? "border-uticaGreen font-bold"
                        : "border-transparent"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>

        {/* service content */}
        {serviceId === "portfolio-advisory" ? (
          <>
            <section className="md:w-[67%] bg-white pt-6 pb-14 px-8 rounded-2xl mb-12">
              <h3 className="text-uticaBlue text-4xl sm:text-2xl  font-bold mb-6">
                Independent Portfolio Management
              </h3>

              <p className="text-black font-[500] text-base mt-3 leading-7">
                Portfolio advisory services are designed to address your
                specific interests and objectives with a portfolio-based
                approach, drawing from the entire universe of investment
                opportunities.
              </p>
              <p className="text-black font-[500] text-base mt-3 leading-7">
                This non-discretionary offering is predicated on four key
                pillars: establishment of your investment objectives, asset
                allocation strategy, security/product selection and ongoing
                performance review. Through working with your relationship
                manager, we periodically review the portfolio with you to make
                sure it is consistent with your investment objectives and our
                market outlook.
              </p>
              <p className="text-black font-[500] text-base mt-3 leading-7">
                Our team leverages the full range of Utica capabilities to match
                your requirements applying a consultative approach.
              </p>
              <hr className="my-6" />
              <ul className="list-disc pl-6 text-black font-[500] space-y-3">
                <li>
                  Asset Allocation Plan – Your objectives are translated into an
                  asset allocation plan.
                </li>
                <li>
                  Focus on Needs and Goals – We focus on your return
                  expectations, risk, and other considerations with no revenue
                  targets.
                </li>
                <li>
                  Individual Investment Ideas – Personalized investment
                  recommendations tailored to your portfolio.
                </li>
              </ul>
            </section>
          </>
        ) : serviceId === "asset-management" ? (
          <>
            <section className="md:w-[67%] bg-white pt-6 pb-14 px-8 rounded-2xl mb-12">
              <h3 className="text-uticaBlue text-4xl sm:text-2xl  font-bold mb-6">
                Managing Your Investments
              </h3>

              <p className="text-black font-[500] text-base mt-3 leading-7">
                Our Asset Management team delivers top-of-the-line investment
                management services to our clients. We also provide innovative
                structured solutions for specific needs through our expertise in
                Portfolio/Fund Management and Mutual Funds, ultimately helping
                all our clients to achieve their financial goals.
              </p>
            </section>
          </>
        ) : serviceId === "wealth-management" ? (
          <>
            <section className="md:w-[67%] bg-white pt-6 pb-14 px-8 rounded-2xl mb-12">
              <h3 className="text-uticaBlue text-4xl sm:text-2xl  font-bold mb-6">
                Your Present, Your Future
              </h3>

              <p className="text-black font-[500] text-base mt-3 leading-7">
                We aim to meet your diverse financial needs by providing unique,
                wide and varying services to ensure we support your financial
                goals through wealth securitization and inter-generational
                wealth transfer.
              </p>
              <p className="text-black font-[500] text-base mt-3 leading-7">
                Our strong team of professionals possess a wealth of experience
                in their various fields and devote these expertise to developing
                diversified portfolios that best fit your return, risk
                expectations and ultimately maximise your earnings.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="md:w-[67%] bg-white pt-6 pb-14 px-8 rounded-2xl mb-12">
              <h3 className="text-uticaBlue text-4xl sm:text-2xl  font-bold mb-6">
                Impact Investing
              </h3>

              <p className="text-black font-[500] text-base mt-3 leading-7">
                We work to understand your specific needs, offering a range of
                investment products and services across various asset classes
                and sectors. From mutual funds to liquidity management, we work
                with individual and institutional investors to provide a
                strategy best suited to your investment goals and portfolios.
              </p>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Services;

import {
  FooterLink,
  NavLink,
  ServiceList,
  BlogList,
  SocialMediaLink,
  JobPosting,
} from "./types";
import PortFolioAdvisoryImage from "./assets/PortfMgt-899x1024.webp";
import AssetManagementImage from "./assets/AssetMgt-1-899x1024.webp";
import WealthManagementImage from "./assets/InvestAdv-896x1024.webp";
import FundManagementImage from "./assets/FundsMgt-902x1024.webp";
import BgImage from "./assets/UCAF-Website-3.webp";
import BgImage2 from "./assets/Horla-Website3.webp";

import { GiTakeMyMoney } from "react-icons/gi";
import {
  FaChartPie,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";

const footerLinks: { [key: string]: FooterLink[] } = {
  Company: [
    { name: "About Us", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Privacy Policy", link: "/contact" },
    { name: "Terms of Service", link: "/contact" },
  ],
  Products: [
    { name: "Fixed Deposit", link: "/fixed-deposit" },
    { name: "Mutual Fund", link: "/mutual-fund" },
    { name: "Impact Investment", link: "/impact-investment" },
  ],
  Services: [
    { name: "Portfolio Advisory", link: "/portfolio-advisory" },
    { name: "Asset Management", link: "/asset-management" },
    { name: "Wealth Management", link: "/wealth-management" },
    { name: "Fund Management", link: "/fund-management" },
  ],
  Resources: [
    { name: "Client Login", link: "/about" },
    { name: "Account Deletion", link: "/careers" },
    { name: "Downloads", link: "/contact" },
  ],
};

const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100084971760580",
  },
  { icon: <FaTwitter />, link: "https://x.com/UticaCap" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/uticacap/#" },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/utica-capital-2243991b7/",
  },

  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@uticacapital9178",
  },
];

const serviceLists: ServiceList[] = [
  {
    name: "Portfolio Advisory",
    description:
      "This service is designed to address your specific interests and objectives with a portfolio-based approach, drawing from the entire universe of investment opportunities.",
    link: "/portfolio-advisory",
    image: (
      <img
        src={PortFolioAdvisoryImage}
        alt="Portfolio Advisory"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    name: "Asset Management",
    description:
      "Our Asset Management team delivers top-of-the-line investment management services to our clients. We also provide innovative structured solutions for specific needs.",
    link: "/asset-management",
    image: (
      <img
        src={AssetManagementImage}
        alt="Portfolio Advisory"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    name: "Wealth Management",
    description:
      "We aim to meet your diverse financial needs by providing unique, wide and varying services to ensure we support your financial goals through wealth securitization.",
    link: "/wealth-management",
    image: (
      <img
        src={WealthManagementImage}
        alt="Portfolio Advisory"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    name: "Fund Management",
    description:
      "We work to understand your specific needs, offering a range of investment products and services across various asset classes and sectors.",
    link: "/fund-management",
    image: (
      <img
        src={FundManagementImage}
        alt="Portfolio Advisory"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
];

const blogLists: BlogList[] = [
  {
    title:
      "NERC has instructed the grid operator to reduce electricity supplies to international customers",
    date: "December 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={BgImage}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    title:
      "Love on a Budget: Building Relationships and Wealth This Valentine’s Month",
    date: "June 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={PortFolioAdvisoryImage}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    title: "Utica Discuss | Sustainability Report",
    date: "April 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={WealthManagementImage}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    title:
      "The Federal Government has distributed over 2,700 trucks of fertilizers",
    date: "October 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={AssetManagementImage}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    title:
      "Nigeria Deposit Insurance Corporation (NDIC) has declared a significant raise in the maximum insurance coverage",
    date: "August 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={FundManagementImage}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    title: "Understanding Nigeria’s Banking Sector Recapitalisation",
    date: "January 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={BgImage2}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
  {
    title:
      "NERC has instructed the grid operator to reduce electricity supplies to international customers",
    date: "December 15, 2024",
    link: "/blog/1",
    image: (
      <img
        src={BgImage}
        alt="Utica Capital Limited"
        className="h-full w-full object-center rounded-2xl"
      />
    ),
  },
];

const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Products",
    link: "/products",
    icon: <PiCaretDownBold strokeWidth={10} size={15} />,
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "About",
    link: "/about",
  },
];
const productLinks: NavLink[] = [
  {
    name: "Fixed Deposit",
    link: "/fixed-deposit",
    icon: <MdOutlineSavings size={20} />,
  },

  {
    name: "Mutual Fund",
    link: "/mutual-fund",
    icon: <FaChartPie strokeWidth={10} size={20} />,
  },
  {
    name: "Impact Investment",
    link: "/impact-investment",
    icon: <GiTakeMyMoney strokeWidth={10} size={20} />,
  },
];

const jobPostings: JobPosting[] = [
  {
    title: "Compliance Officer",
    author: "UticaAdmin",
    published_on: "May 8, 2024",
    published_in: "Job Listings",
    expired_on: "May 31, 2024",
    job_summary:
      "Individually accountable for establishing a compliance framework; including Risk Management and Monitoring plan. Initiates and facilitates corrective action where required. Prepare and submit all regulatory reports to prevent penalties.",
    job_details: {
      responsibilities: [
        "Conduct risk assessments and develop and implement compliance policies and procedures to ensure adherence to SEC guidelines and other applicable laws and regulations.",
        "Develop, implement and deliver training programs for employees to ensure awareness and adherence to compliance policies and procedures.",
        "Provide guidance and advice to management and employees on compliance matters, including regulatory requirements and best practices.",
        "Monitor and assess the effectiveness of the firm’s compliance program, and make recommendations for improvements as necessary.",
        "Stay up-to-date on regulatory developments and industry trends, and communicate relevant information to management and employees.",
        "Conduct compliance audits and reviews, and provide reports to management and regulatory authorities.",
        "Collaborate with legal, risk management and audit teams to ensure the effective management of regulatory and compliance risks.",
        "Investigate compliance issues, and recommend corrective action to ensure adherence to SEC guidelines and other relevant regulations.",
      ],
    },
    required_qualifications: {
      education: "Bachelor’s degree in business, finance, or related field.",
      certifications: "Must be a registered SEC-Sponsored individual.",
    },
    job_factors: {
      knowledge: [
        "Minimum of 3 years of relevant experience in a compliance role within an asset management firm or related industry.",
        "In-depth knowledge of SEC regulations and guidelines.",
      ],
      abilities: [
        "Excellent communication.",
        "Proven problem-solving skills.",
        "Strong analytical skills.",
      ],
      key_working_relationships: [
        "Managing Director",
        "Internal Control Officer",
        "Securities and Exchange Commission",
      ],
    },
    compensation:
      "We offer a highly competitive salary package for this position to ensure that our employees are fairly compensated for their work and dedication.",
    job_category: "Compliance",
    job_type: "Full Time",
    job_location: "Ikoyi, Lagos",
  },
  {
    title: "Compliance Officer",
    author: "UticaAdmin",
    published_on: "May 8, 2024",
    published_in: "Job Listings",
    expired_on: "May 31, 2024",
    job_summary:
      "Individually accountable for establishing a compliance framework; including Risk Management and Monitoring plan. Initiates and facilitates corrective action where required. Prepare and submit all regulatory reports to prevent penalties.",
    job_details: {
      responsibilities: [
        "Conduct risk assessments and develop and implement compliance policies and procedures to ensure adherence to SEC guidelines and other applicable laws and regulations.",
        "Develop, implement and deliver training programs for employees to ensure awareness and adherence to compliance policies and procedures.",
        "Provide guidance and advice to management and employees on compliance matters, including regulatory requirements and best practices.",
        "Monitor and assess the effectiveness of the firm’s compliance program, and make recommendations for improvements as necessary.",
        "Stay up-to-date on regulatory developments and industry trends, and communicate relevant information to management and employees.",
        "Conduct compliance audits and reviews, and provide reports to management and regulatory authorities.",
        "Collaborate with legal, risk management and audit teams to ensure the effective management of regulatory and compliance risks.",
        "Investigate compliance issues, and recommend corrective action to ensure adherence to SEC guidelines and other relevant regulations.",
      ],
    },
    required_qualifications: {
      education: "Bachelor’s degree in business, finance, or related field.",
      certifications: "Must be a registered SEC-Sponsored individual.",
    },
    job_factors: {
      knowledge: [
        "Minimum of 3 years of relevant experience in a compliance role within an asset management firm or related industry.",
        "In-depth knowledge of SEC regulations and guidelines.",
      ],
      abilities: [
        "Excellent communication.",
        "Proven problem-solving skills.",
        "Strong analytical skills.",
      ],
      key_working_relationships: [
        "Managing Director",
        "Internal Control Officer",
        "Securities and Exchange Commission",
      ],
    },
    compensation:
      "We offer a highly competitive salary package for this position to ensure that our employees are fairly compensated for their work and dedication.",
    job_category: "Compliance",
    job_type: "Full Time",
    job_location: "Ikoyi, Lagos",
  },
  {
    title: "Compliance Officer",
    author: "UticaAdmin",
    published_on: "May 8, 2024",
    published_in: "Job Listings",
    expired_on: "May 31, 2024",
    job_summary:
      "Individually accountable for establishing a compliance framework; including Risk Management and Monitoring plan. Initiates and facilitates corrective action where required. Prepare and submit all regulatory reports to prevent penalties.",
    job_details: {
      responsibilities: [
        "Conduct risk assessments and develop and implement compliance policies and procedures to ensure adherence to SEC guidelines and other applicable laws and regulations.",
        "Develop, implement and deliver training programs for employees to ensure awareness and adherence to compliance policies and procedures.",
        "Provide guidance and advice to management and employees on compliance matters, including regulatory requirements and best practices.",
        "Monitor and assess the effectiveness of the firm’s compliance program, and make recommendations for improvements as necessary.",
        "Stay up-to-date on regulatory developments and industry trends, and communicate relevant information to management and employees.",
        "Conduct compliance audits and reviews, and provide reports to management and regulatory authorities.",
        "Collaborate with legal, risk management and audit teams to ensure the effective management of regulatory and compliance risks.",
        "Investigate compliance issues, and recommend corrective action to ensure adherence to SEC guidelines and other relevant regulations.",
      ],
    },
    required_qualifications: {
      education: "Bachelor’s degree in business, finance, or related field.",
      certifications: "Must be a registered SEC-Sponsored individual.",
    },
    job_factors: {
      knowledge: [
        "Minimum of 3 years of relevant experience in a compliance role within an asset management firm or related industry.",
        "In-depth knowledge of SEC regulations and guidelines.",
      ],
      abilities: [
        "Excellent communication.",
        "Proven problem-solving skills.",
        "Strong analytical skills.",
      ],
      key_working_relationships: [
        "Managing Director",
        "Internal Control Officer",
        "Securities and Exchange Commission",
      ],
    },
    compensation:
      "We offer a highly competitive salary package for this position to ensure that our employees are fairly compensated for their work and dedication.",
    job_category: "Compliance",
    job_type: "Full Time",
    job_location: "Ikoyi, Lagos",
  },
];

export {
  footerLinks,
  socialMediaLinks,
  serviceLists,
  blogLists,
  navLinks,
  productLinks,
  jobPostings,
};

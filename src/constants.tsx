import {
  FooterLink,
  NavLink,
  ServiceList,
  BlogList,
  SocialMediaLink,
  JobPosting,
  CoreValue,
  BoardMember,
} from "./types";
import PortFolioAdvisoryImage from "./assets/PortfMgt-899x1024.webp";
import AssetManagementImage from "./assets/AssetMgt-1-899x1024.webp";
import WealthManagementImage from "./assets/InvestAdv-896x1024.webp";
import FundManagementImage from "./assets/FundsMgt-902x1024.webp";
import BgImage from "./assets/UCAF-Website-3.webp";
import BgImage2 from "./assets/Horla-Website3.webp";
import AdeshewaImage from "./assets/adesewa.webp";
import ChairmanImage from "./assets/Chairman-Utica3-scaled.webp";
import BelgoreImage from "./assets/ola-belgore.webp";
import YetundeImage from "./assets/Yetunde-Lawal.webp";
import OmoakaImage from "./assets/okpapi-omoaka.webp";
import DeleImage from "./assets/Dele-Abegunde2.webp";
import OladayoImage from "./assets/oladayo-orolu.webp";
import AhmedImage from "./assets/tajudeen-ahmed.webp";
import { GiTakeMyMoney } from "react-icons/gi";
import {
  FaChartPie,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRegCompass,
} from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

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

const coreValues: CoreValue[] = [
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To build a better future for our stakeholders; one investment at a time.",
    icon: <FaRegCompass size={28} />,
  },
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To cultivate sustainable growth by prioritizing people, nurturing the environment, and maximizing profitability.",
    icon: <TbWorld size={28} />,
  },
];

const boardMembers: BoardMember[] = [
  {
    id: "akin",
    name: "Dr. Adesegun A. Akin-Olugbade",
    title: "Chairman",
    image: (
      <img
        src={ChairmanImage}
        alt="Dr. Adesegun A. Akin-Olugbade"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "Dr. Adesegun Akin-Olugbade, OON is an international lawyer and leading finance and corporate governance expert, with extensive legal, financial services, and corporate management experience.",
      "He is the founder and Principal Partner of Luwaji Nominees, and Executive Chairman of Luwaji Advisory Services Limited. Dr. Adesegun Akin-Olugbade was formerly General Counsel and Senior Director of the African Development Bank Group, founding Chief Legal Officer of African Export-Import Bank, and Executive Director and Chief Operating Officer of Africa Finance Corporation. He was a consultant (Of Counsel) to Clifford Chance Worldwide for 5 years and currently consults for AELEX Partners.",
      "He was the first African member to be appointed to the World Trade Board in 2019 and has been on the Monetary Law Committee of the International Law Association (MOCOMILA) for more than 20 years. He has over 30 years of legal and operating management experience primarily with leading commercial law firms, multilateral development banks, and international financial institutions.",
      "A graduate of the Harvard Law School and overall Best Student at the Nigerian Law School in 1984, Dr. Akin-Olugbade has served on the boards of leading multinational corporations and financial services companies, including Ecobank Transnational Inc (as a non-Executive Director and Chairman of the Governance Committee), Asset & Resources Management Company Limited, Nigeria (as a founding director), and Mouka Limited (as Vice-Chairman).",
      "He is currently Chairman of NSIA Insurance Limited, Southern Marine Petroleum Limited, Axion Realty & Development Company Limited, and Dr. Adesegun Akin-Olugbade Foundation. He is Vice-Chairman of OBA International Limited, OBA Transport Limited, and ARC (Nigeria) Limited. He is a Non-Executive Director of NGClearing Limited and Chairman of the Risk Management Committee.",
      "In January 2024, he was invited to serve on the Board of Trustees of African Fertilizer and Agribusiness Partnership (AFAP), a pan-African not-for-profit social enterprise. He is a member of the Finance, Audit, and Compliance Committee of AFAP.",
      "A life member of the Nigerian Conservation Foundation and Trustee of charitable organisations, he was conferred with the National Honour of Officer of the Order of the Niger (OON) by the Federal Republic of Nigeria in 2012.",
    ],
    linkedin:
      "https://www.linkedin.com/in/dr-adesegun-akin-olugbade-oon-8b4983a/",
  },
  {
    id: "belgore",
    name: "Ola Belgore",
    title: "Managing Director",
    image: (
      <img
        src={BelgoreImage}
        alt="Ola Belgore"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "With over 20 years’ experience gained in the Financial Industry, Ola’s diverse and rich professional career started in 2003 and has seen him handling different challenging roles in Stockbroking, Asset Management, Portfolio Advisory, and Business Development.",
      "A graduate of Microbiology from the University of Lagos, Nigeria, Ola received his MBA in International Business from the prestigious Lincoln University, California, USA. He began his career at TRW Stockbrokers Limited from where he joined Meristem Securities Limited in 2006. In 2008, he rose rapidly to become the pioneer Head of the Wealth Management Department of Meristem Wealth Management Limited, a subsidiary which he helped set up alongside two other colleagues.",
      "Recognized as a valuable asset to the organization for his strategic skills at driving projects, he was redeployed to Group Business Development with the herculean responsibility of coordinating, integrating, and driving Business Development of the five companies in Meristem.",
      "Ola’s background has immensely aided him in carving an unbeatable niche for himself as a positive influencer both in the professional and personal fronts. He brings deep insight, objectivity, and honesty into issues and projects, and as with everything he sets his mind on, he performs excellently at them all.",
      "As Managing Director of Afrinvest Asset Management Limited, Ola managed and created several funds including a dollar fund, fixed income fund, and a money market fund.",
      "Ola is a Member of the Chartered Institute for Securities and Investment (CISI); Associate of the Nigerian Institute of Management (ANIM); Fellow, Institute of Credit Administration; Associate member, Commodity Brokers Association of Nigeria (CBAN); Honorary Senior Member, Chartered Institute of Bankers (CIBN), and a Fellow of the Association of Investment Advisers and Portfolio Managers (IAPM).",
      "He is also an Associate of the Chartered Institute of Arbitration (CiArb) and a Council Member of the Association of Corporate and Individual Investment Advisers (CIIA).",
      "A highly enthusiastic and passionate person, he has been instrumental to the growth and sustenance of many helpful policies in the various organizations he has had the privilege of serving and continues to set the bar high.",
    ],
    linkedin: "https://www.linkedin.com/in/ola-belgore-aciarb-375b181a/",
  },
  {
    id: "yetunde",
    name: "Yetunde Lawal",
    title: "Non-Executive Director",
    image: (
      <img
        src={YetundeImage}
        alt="Yetunde Lawal"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "Yetunde Lawal is currently a Senior SQL Server Database Administrator with Intercontinental Exchange Inc, USA. She has more than 8 years of experience implementing and managing complex SQL Server Database Systems with a robust background in the implementation of multiple database technologies, focusing on performance tuning, security, high availability solutions, and disaster recovery.",
      "Her strong analytical and organizational skills allow her to quickly understand new business processes and their relation to the end user, making her an invaluable asset in database management.",
      "Prior to joining Intercontinental Exchange, she worked as a Database Engineer with Strategic Link Consulting, a Loan Management System company where she managed and provided technology solutions in various aspects of database management and availability.",
      "She has also worked with financial institutions such as Oceanic Bank PLC, Guaranty Trust Bank Nigeria, and First Bank PLC in the early years of her career, serving as Head of Customer Service Relationship Management across various states in Nigeria.",
      "Yetunde holds a B.Sc. in Computer Science from the University of Ilorin, Nigeria. She is a Microsoft Certified Systems Administrator and a Member of the Professional Association for SQL Server (PASS).",
      "Currently, she is enrolled in a Master's program in Data Analytics at Georgia Institute of Technology, further expanding her expertise in data-driven solutions.",
    ],
    linkedin: "https://www.linkedin.com/in/sqlserverdba1/",
  },
  {
    id: "omoaka",
    name: "Okpapi Omoaka",
    title: "Non-Executive Director",
    image: (
      <img
        src={OmoakaImage}
        alt="Okpapi Omoaka"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "Okpapi is a thorough-bred Information Technology Professional and Business Leader with expertise in Systems Analysis, Business Analysis, Project Management, Technology Sales, IT Consulting, Business Development, and General Management.",
      "With over 15 years of varied experience, his career spans across Project Management, IT Consulting, New Business Incubation, and Strategic Business Development.",
      "He commenced his career as a pupil telecoms project engineer at Telnet Limited, where he designed Virtual Private Networks for Private and Public Organizations.",
      "During his time at Telnet, he also managed the project delivery for the first 3.5 GHz WIMAX project in Nigeria on behalf of Cyberspace Network Limited, serving as the Telecoms Project Lead.",
      "Currently, Okpapi provides Information Systems advisory and Business Consulting Services to Vatebra’s clients across the African region while also driving business expansion for the company in Africa.",
      "In addition to his role at Vatebra, he chairs the IT Steering Committee and the Brand & Culture Committee of Vatebra Limited.",
      "Okpapi is also a Non-Executive Director at Utica Capital Limited, where he provides advisory in Legal & Ethical Compliance, Strategic Direction, and Oversight.",
      "He holds a BEng in Electrical Electronics Engineering and a Master’s in Business Administration (MBA) from the University of South Wales.",
    ],
    linkedin:
      "http://linkedin.com/in/okpapi-omoaka-mba-pmp%C2%AE-csm%C2%AE-a2536130/?originalSubdomain=ca",
  },
  {
    id: "dele",
    name: "Dr. Dele Abegunde",
    title: "Non-Executive Director",
    image: (
      <img
        src={DeleImage}
        alt="Dr. Dele Abegunde"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "Dr. Dele Abegunde has over 20 years of experience in Global Health Economics and International Public Health, leading operational and research projects in multilateral and non-profit organizations such as the World Health Organization and John Snow Inc. Research and Training.",
      "He holds a Master’s Degree in Health Economics from the University of York, England.",
      "Currently, he serves as an International Consultant for various global organizations, including UNFPA, Islamic Republic of Iran, UNICEF, WHO South Sudan, Gavi/Deloitte USA, UNFPA Maldives, WHO Afro Botswana, WHO Afro, UNICEF, and the Institute of Human Virology of Nigeria.",
      "Before taking on his role as an International Consultant, he was the Director of Monitoring and Evaluation for John Snow Inc. Research and Training in Boston.",
      "He also worked as the Principal Consultant and Lead Health Economist for the Institute for Africa Health and Economic Research and Consultancy (iaHERC) in Nigeria.",
      "Dr. Abegunde has served as a Medical Officer and Health Economist for the World Health Organization in Switzerland and as a Health Economist for Catalyst Health Economics Consultant in the United Kingdom.",
      "A former Associate Lecturer at the University of Ilorin, he has authored and contributed to over 20 publications and research papers on public health in both local and international conferences.",
      "His recent research presentations at scientific conferences include studies on Universal Health Insurance Coverage and Reimbursement for Medicines in Countries, as well as inefficiencies due to poor access and irrational use of medicines to treat acute respiratory tract infections in children.",
    ],
    linkedin: "https://www.linkedin.com/in/dele-abegunde-6083672a/",
  },
  {
    id: "oladayo",
    name: "Oladayo Orolu",
    title: "Independent Non-Executive Director",
    image: (
      <img
        src={OladayoImage}
        alt="Oladayo Orolu"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "Oladayo Orolu is a finance and business strategy expert with close to 20 years of experience in corporate finance, accounting, business, and market development activities across the Power, Oil, and Gas sectors of the economy.",
      "He is a Fellow of the Institute of Chartered Accountants and formerly served as the Head of Accounting and Finance at Siemens Nigeria.",
      "Oladayo was the pioneer Head of Finance and Administration at Camac Petroleum Limited, where he played a key role in major asset acquisitions and project finance activities.",
      "Earlier in his career, he worked as a Senior Associate at PricewaterhouseCoopers and as an Audit Associate at Akintola Williams Deloitte at different times.",
      "Currently, he is the Head of Business Development and Government Affairs at Siemens Nigeria, overseeing Corporate Strategy, Government Affairs, Partner Management, and Technical Vocational Education Training.",
      "In addition, Oladayo serves as a member of several prestigious organizations, including the Private Sector Advisory Group, European Business Organization, Nigerian-German Chamber of Commerce, and the Infrastructure Policy Commission of the Nigerian Economic Summit Group.",
      "He is an Independent Member of the Advisory Board of the Afrinvest Dollar Fund and a member of the Advisory Board of Howbury Schools Lagos.",
      "Oladayo holds an MBA degree from the University of Warwick, a Bachelor's degree in Industrial Chemistry from the University of Lagos, and a Diploma in International Financial Reporting from ACCA.",
      "He is also a Fellow of the Institute of Credit Administration of Nigeria and a member of the International Association of Energy Economics, Global Association of Risk Professionals, and the Association of Corporate Treasurers of Nigeria.",
      "His leadership development includes participation in the Siemens Global Leadership Academy, along with several other senior executive programs.",
    ],
    linkedin: "https://www.linkedin.com/in/oladayo-orolu-894549a/",
  },
  {
    id: "ahmed",
    name: "Tajudeen Ahmed",
    title: "Independent Non-Executive Director",
    image: (
      <img
        src={AhmedImage}
        alt="Tajudeen Ahmed"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "Tajudeen Ahmed has had an eventful career spanning over 20 years across three key sectors: Consulting, Banking, and Manufacturing. He is currently the General Manager/Group Head of Business Development at BUA Group.",
      "Previously, he was a Senior Consultant at the globally acclaimed professional firm, Arthur Andersen (now known as KPMG), where he gained extensive experience in financial consulting and strategy.",
      "He later transitioned into banking, serving as the Head of Strategy within the Financial Control & Strategic Planning Department of Zenith Bank Plc.",
      "In 2008, he moved to Skye Bank Plc to establish and lead its Strategy Department. By 2012, he had risen to the position of Assistant General Manager (AGM)/Group Head of Strategic Planning & Project Management Office (PMO), spearheading several transformative and organization-defining projects.",
      "Mr. Ahmed holds a B.Sc. in Accounting from Ahmadu Bello University (ABU), Zaria, where he graduated as the Best Student in his department and faculty. He also earned an MBA with Distinction from the University of Leeds, United Kingdom.",
      "He is a Fellow (FCA) of the Institute of Chartered Accountants of Nigeria (ICAN) and a Fellow of the Institute of Credit Administration (FICA).",
      "Additionally, he is a Fellow of the Nigeria Leadership Initiative (FNLI), a prestigious honor awarded by Yale University, USA.",
      "Mr. Ahmed is an Honorary Senior Member (HCIB) of the Chartered Institute of Bankers of Nigeria (CIBN) and an Associate Member of the Nigerian Institute of Management (AMNIM).",
      "He is also a member of the Society for Corporate Governance Nigeria (SCGN) and an alumnus of the Lagos Business School (LBS) Senior Management Program 42 (SMP 42).",
      "His leadership skills were recognized early, as he was initially elected Class Alumni Vice President in 2011 and later elected as President, a position he has held since 2013.",
    ],
    linkedin:
      "https://www.linkedin.com/in/tajudeen-ahmed-fca-hcib-m-ciod-a824b43/",
  },
  {
    id: "susan",
    name: "Adesewa Susan Adeoye",
    title: "Company Secretary",
    image: (
      <img
        src={AdeshewaImage}
        alt="Adesewa Susan Adeoye"
        className="w-38 h-38 rounded-full object-center border-4 border-uticaGreen shadow-lg"
      />
    ),
    description: [
      "The Company Secretary to Utica Capital Limited is Worrington & Co., represented by one of its partners, Adesewa Adeoye.",
      "Adesewa has over 15 years of experience as a lawyer, having started her career with Deji Sasegbon & Co., where she worked on corporate law, civil litigation, commercial law, and intellectual property.",
      "She has gained extensive legal expertise working with other notable law firms, including FO Akinrele & Co., Clifford Chance, Herbert Smith Freehills, and SJ Berwin LLP in the United Kingdom.",
      "Adesewa specializes in corporate transactions, compliance, corporate governance, and risk management, ensuring businesses operate within regulatory frameworks while maximizing efficiency.",
      "Her law firm, Worrington & Co., specializes in company secretariat services, offering a full range of corporate legal solutions across various industries.",
      "The firm operates seamlessly across multiple jurisdictions, including Dubai, Nigeria, and the United Kingdom, leveraging valuable experience gained in these regions.",
      "Adesewa holds a Master’s degree from the University of Aberdeen in Scotland.",
      "She is a Barrister of the Supreme Court of Nigeria and a Non-Practicing Barrister of the Supreme Court of England and Wales.",
    ],
    linkedin:
      "https://www.linkedin.com/in/adesewa-s-adeoye-mciarb-acti-64877325/",
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
  coreValues,
  boardMembers,
};

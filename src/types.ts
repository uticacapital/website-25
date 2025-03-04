import React from "react";

export type NavLink = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export type ServiceList = {
  name: string;
  description: string;
  link: string;
  image: React.ReactNode;
};

export type BlogList = {
  title: string;
  date: string;
  link: string;
  image: React.ReactNode;
};

export type FooterLink = {
  name: string;
  link: string;
};

export type SocialMediaLink = {
  icon: React.ReactNode;
  link: string;
};

export type JobPosting = {
  title: string;
  author: string;
  published_on: string;
  published_in: string;
  expired_on: string;
  job_summary: string;
  job_details: {
    responsibilities: string[];
  };
  required_qualifications: {
    education: string;
    certifications: string;
  };
  job_factors: {
    knowledge: string[];
    abilities: string[];
    key_working_relationships: string[];
  };
  compensation: string;
  job_category: string;
  job_type: string;
  job_location: string;
};

export type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type BoardMember = {
  id: string;
  name: string;
  title: string;
  image: React.ReactNode;
  description: string[];
  linkedin: string;
};

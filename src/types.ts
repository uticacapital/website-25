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

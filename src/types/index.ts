export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
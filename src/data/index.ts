import { 
  NavItem, 
  Service, 
  PortfolioItem, 
  TeamMember, 
  Testimonial, 
  FooterSection 
} from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure for your business applications with optimization and management.',
    icon: 'cloud',
  },
  {
    id: 2,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies to enhance your online presence.',
    icon: 'code',
  },
  {
    id: 3,
    title: 'IP-PBX Software',
    description: 'Advanced communication solutions with IP-based private branch exchange systems for modern businesses.',
    icon: 'phone',
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description: 'Comprehensive strategies to evolve your business in the digital age with modern tech stack.',
    icon: 'shuffle',
  },
  {
    id: 5,
    title: 'SaaS Development',
    description: 'Custom software-as-a-service solutions built to scale, with subscription management and user analytics. We specialize in developing cloud-based applications that help businesses streamline operations and reach customers globally.',
    icon: 'layers',
  },
  {
    id: 6,
    title: 'AI Integration',
    description: 'Intelligent systems that enhance your business processes with smart automation and data insights. Our AI solutions leverage cutting-edge technology to optimize workflows, improve decision-making, and drive innovation across your organization.',
    icon: 'brain',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Enterprise CRM Solution',
    description: 'A comprehensive customer relationship management system with integrated analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'SaaS',
  },
  {
    id: 2,
    title: 'Healthcare Management Platform',
    description: 'Electronic health records system with patient portal and appointment scheduling.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial data visualization and reporting tool for executives.',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Finance',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Scalable online shopping solution with inventory management and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'E-commerce',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Tech visionary with 15+ years in SaaS development and enterprise solutions.',
  },
  {
    id: 2,
    name: 'Samantha Lee',
    position: 'CTO',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Cloud architecture expert specializing in scalable SaaS platforms.',
  },
  {
    id: 3,
    name: 'Marcus Chen',
    position: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    position: 'UX Director',
    image: 'https://images.pexels.com/photos/3799115/pexels-photo-3799115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Human-centered design specialist creating intuitive user experiences.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Tathya Technologies transformed our business with their custom CRM solution. The intuitive design and powerful features have increased our team\'s productivity by 35%.',
    author: 'Michael Roberts',
    position: 'CTO',
    company: 'Global Innovations',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    quote: 'The healthcare platform developed by Tathya has revolutionized how we manage patient care. The system is reliable, secure, and our staff love using it.',
    author: 'Dr. Sarah Williams',
    position: 'Medical Director',
    company: 'Wellness Medical Center',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    quote: 'Working with Tathya on our financial analytics platform was seamless. Their team understood our complex requirements and delivered a solution that exceeded our expectations.',
    author: 'James Anderson',
    position: 'CFO',
    company: 'Meridian Investments',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud Solutions', href: '#cloud' },
      { label: 'Website Development', href: '#website' },
      { label: 'IP-PBX Software', href: '#ip-pbx' },
      { label: 'Digital Transformation', href: '#digital' },
      { label: 'SaaS Development', href: '#saas' },
      { label: 'AI Integration', href: '#ai' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Documentation', href: '#docs' },
      { label: 'Support', href: '#support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookie' },
      { label: 'GDPR', href: '#gdpr' },
    ],
  },
];
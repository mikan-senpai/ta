import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import CompanyMarquee from '../components/CompanyMarquee';
import PortfolioPreview from '../components/PortfolioPreview';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="bg-surface-tertiary">
      <Hero />
      <CompanyMarquee />
      <ServicesPreview />
      <PortfolioPreview />
      <About />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
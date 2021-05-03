import { Fragment } from "react";
import dynamic from 'next/dynamic'
import Header from "../../commons/Header";
import IntroSection from "./IntroSection";
const ServicesSection = dynamic(() => import('./ServicesSection'),  { ssr: false })
const PortfolioSection = dynamic(() => import('./PortfolioSection'),  { ssr: false })
const TeamSection = dynamic(() => import('./TeamSection'),  { ssr: false })
const TestimonialSection = dynamic(() => import('./TestimonialSection'),  { ssr: false })
const Footer = dynamic(() => import('../../commons/Footer'),  { ssr: false })

export default function Homepage() {
  return (
    <Fragment>
      <div className="px-2.5 pt-3.5 pb-6">
        <Header />
        <IntroSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialSection />
      </div>
      <Footer />
    </Fragment>
  );
}

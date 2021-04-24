import { Fragment } from "react";
import Header from "../../commons/Header";
import IntroSection from "./IntroSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import TeamSection from "./TeamSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "../../commons/Footer";

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

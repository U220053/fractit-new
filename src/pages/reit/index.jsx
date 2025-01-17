import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
import Header from "@/components/common/header/DefaultHeader";
import BreadcrumbBanner3 from "./BreadcrumbBanner3";
import OurMission1 from "./OurMission1";
import WhyChoose from "./WhyChoose";
import FeaturedProp from "./FeaturedProp";
import FindProp2 from "./FindProp2";

const metadata = {
  title:
    "Listing Single – Details V1 || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

const Reit = () => {
  return (
    <>
      <Header />
      <BreadcrumbBanner3 />
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">Our Mission Is To FindHouse</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission1 />
            <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Why Choose FractIt REIT?</h2>
                </div>
              </div>
            </div>
            {/* End .row */}
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProp />
              </div>
            </div>
            <div className="row">
              <WhyChoose />
            </div>
          </div>
          {/* End .row */}
        </div>
        <section id="property-search" className="property-search bg-img4">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="search_smart_property text-center">
                <h2>Full Transparency and Security</h2>
                <p>
                  Each REIT token's underlying property allocation, rental
                  yields, and performance data are publicly available, ensuring
                  complete transparency. Our blockchain-based platform secures
                  all transactions and ownership details.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="property-city" className="property-city pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>How to Start Investing</h2>
                  <p>Getting started with FractIt REIT is easy:</p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <FindProp2 />
            </div>
            {/* End .row */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Reit;

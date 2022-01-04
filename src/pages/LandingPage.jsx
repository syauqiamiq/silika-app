import React from "react";
import FeatureCardComponents from "../components/Landing/FeatureCardComponents";
import JumbotronComponent from "../components/Landing/JumbotronComponent";
import SectionAboutComponent from "../components/Landing/SectionAboutComponent";
import Layout from "./Layout";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <JumbotronComponent />
        <FeatureCardComponents />
        <SectionAboutComponent />
      </Layout>
    </>
  );
};

export default LandingPage;

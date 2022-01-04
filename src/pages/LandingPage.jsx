import React from "react";
import FeatureCardComponents from "../components/Landing/FeatureCardComponents";
import JumbotronComponent from "../components/Landing/JumbotronComponent";
import Layout from "./Layout";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <JumbotronComponent />
        <FeatureCardComponents />
      </Layout>
    </>
  );
};

export default LandingPage;

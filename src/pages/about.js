// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About FBC">
      <h2>About FBC</h2>
      <ul>
        <li>
          <Link to="/WhoWeAre">Who We Are</Link>
        </li>
        <li>
          <Link to="/History">FBC History</Link>
        </li>
      </ul>
    </Layout>
  );
};
// Step 3: Export your component
export default AboutPage;

// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const Ministries = () => {
  return (
    <Layout pageTitle="About FBC">
      <h2>FBC Ministries</h2>
      <ul>
        <li>
          <Link to="/children">Children's Ministry</Link>
        </li>
        <li>
          <Link to="/youth">Youth Ministry</Link>
        </li>
        <li>
          <Link to="/women">Women's Ministry</Link>
        </li>
        <li>
          <Link to="/men">Men's Ministry</Link>
        </li>
        <li>
          <Link to="/community">Community Ministry</Link>
        </li>
      </ul>
    </Layout>
  );
};
// Step 3: Export your component
export default Ministries;

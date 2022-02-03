// import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

const IndexPage = () => {
  return (
    <Layout pageTitle="Friendship Baptist Church">
      <StaticImage alt="Friendship Baptist Church" src="../images/FBC.png" />
      <h2>Welcome to Friendship Baptist Church's "Proof of Concept" site!</h2>
      <p>God Bless!</p>
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;

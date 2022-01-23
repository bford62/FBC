import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Friendship Baptist Church">
      <h2>Welcome to Friendship Baptist Church's PoC site!</h2>
      <p>God Bless!</p>
      <StaticImage
        alt="Friendship Baptist Church"
        src="../images/FBC.png"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout.js';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query ImageQuery {
    file(name: { eq: "apex" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout title="About This Site">
      <h1>AboutPage!</h1>
      <GatsbyImage
        className="image-style"
        image={getImage(data.file)}
        alt="reach for the apex"
      />
      <Link className="link-style" to="/">Home</Link>
    </Layout>
  );
}
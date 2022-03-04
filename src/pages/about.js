import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout
      title="About This Site"
      description="More information about the site"
    >
      <h1>AboutPage!</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
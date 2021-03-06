import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout.js"

import { imageWrapper } from '../styles/index.module.css'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  query GetBlogPosts {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          title
          description
          date(formatString: "D MM YYYY")
        }
      }
    }
  }
`);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/icon.png"
          alt="gatsby logo"
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>

      <h1>Hello Frontend Masters!</h1>
      <Link to="/about/">About</Link>

      <h2>Check out my recent blog posts</h2>
      <ul className="listing-style">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
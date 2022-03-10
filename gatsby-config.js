module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Nedu'm Portfolio",
    description: "Nedu'm is a front end developer. With these technical skills - react, vue, javascript, styled-components and tailwindcss building the best user-interfaces are his favorite thing on the web.",
    image:
      "src/images/pfp.png",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-remark-images", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/pfp.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images`
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
    }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
  ],
};
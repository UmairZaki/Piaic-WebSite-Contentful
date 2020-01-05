const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided ContentfulHome query to fetch the data from Contentful
  return graphql(
    `
      {
        contentfulHome {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
};
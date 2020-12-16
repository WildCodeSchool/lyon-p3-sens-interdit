const path = require(`path`);

const { sluggify } = require("../utils/Sluggify");
const {
  removeNameForUrl: removePageNameForUrl,
} = require("../utils/removeNameForUrl");

const makeRequest = require("../utils/makeRequest");

const turnNewSpectacleIntoArchive = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const getSpectacles = makeRequest(
    graphql,
    `
    {
      spectacles: allStrapiSpectacle(filter: {festival: {visible: {eq: false}}}) {
        edges{
          node {
            id
            title
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each spectacle related to an archived festival
    result.data.spectacles.edges.forEach(({ node }) => {
      let spectacleSlug = sluggify(node.title);
      let spectacleId = removePageNameForUrl(node.id, "Spectacle");
      createPage({
        path: `archives/spectacle/${spectacleSlug}${spectacleId}`,
        component: path.resolve(`src/templates/newArchiveSpectacle.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Query for spectacles nodes to use in creating pages.
  return getSpectacles;
};

module.exports = turnNewSpectacleIntoArchive;

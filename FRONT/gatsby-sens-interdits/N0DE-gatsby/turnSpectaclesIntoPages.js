const path = require(`path`);

const { sluggify } = require("./../src/utils/Sluggify");

const {
    removeNameForUrl: removePageNameForUrl,
  } = require("./../src/utils/removeNameForUrl");

const makeRequest = require("./makeRequest")

const turnSpectaclesIntoPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const getSpectacles = makeRequest(
    graphql,
    `
    {
      spectacles: allStrapiSpectacle {
        edges{
          node {
            title
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each spectacle
    result.data.spectacles.edges.forEach(({ node }) => {
      let spectacleSlug = sluggify(node.title);
      let spectacleId = removePageNameForUrl(node.id, "Spectacle");
      createPage({
        path: `/spectacle/${spectacleSlug}${spectacleId}`,
        component: path.resolve(`src/templates/spectacle.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Query for spectacles nodes to use in creating pages.
  return getSpectacles;
};



module.exports.turnSpectaclesIntoPages = turnSpectaclesIntoPages;

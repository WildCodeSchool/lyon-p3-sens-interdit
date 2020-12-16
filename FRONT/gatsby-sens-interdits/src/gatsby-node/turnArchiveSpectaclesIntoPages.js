const path = require(`path`);

const { sluggify } = require("../utils/Sluggify");

const {
  removeNameForUrl: removePageNameForUrl,
} = require("../utils/removeNameForUrl");

const makeRequest = require("../utils/makeRequest");

const turnArchiveSpectaclesIntoPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const getArchiveSpectacle = makeRequest(
    graphql,
    `
    {
        allStrapiArchivesOld {
        edges {
          node {
            strapiId
            id
            titre
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArchivesOld.edges.forEach(({ node }) => {
      let archiveSpectacleSlug = sluggify(node.titre);
      let archiveSpectacleId = removePageNameForUrl(node.id, "Archives-old");
      createPage({
        path: `/archives/spectacle/${archiveSpectacleSlug}${archiveSpectacleId}`,
        component: path.resolve(`src/templates/archiveSpectacle.js`),
        context: {
          id: node.id,
          strapiId: node.strapiId,
        },
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getArchiveSpectacle;
};

module.exports = turnArchiveSpectaclesIntoPages;

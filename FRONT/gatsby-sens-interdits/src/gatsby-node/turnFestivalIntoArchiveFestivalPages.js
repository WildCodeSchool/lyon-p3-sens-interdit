const path = require(`path`);

const makeRequest = require("../utils/makeRequest");

const turnFestivalIntoArchiveFestivalPages = async function ({
  graphql,
  actions,
}) {
  const { createPage } = actions;

  const getFestivalArchive = makeRequest(
    graphql,
    `
    {
      allStrapiFestival(filter: {visible: {eq: false}}) {
        edges {
          node {
            year
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each festival-to-display-as-archived.
    result.data.allStrapiFestival.edges.forEach(({ node }) => {
      createPage({
        path: `/archives/programme/${node.year}`,
        component: path.resolve(`src/templates/archiveFestival.js`),
        context: {
          year: node.year,
        },
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getFestivalArchive;
};

module.exports = turnFestivalIntoArchiveFestivalPages;

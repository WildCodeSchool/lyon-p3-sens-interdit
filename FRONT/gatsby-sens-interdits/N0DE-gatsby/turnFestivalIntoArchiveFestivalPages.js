const path = require(`path`);

const makeRequest = require("./makeRequest")


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
            visible
            title
            id
            strapiId
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
        path: `/programme/${node.year}`,
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

module.exports.turnFestivalIntoArchiveFestivalPages = turnFestivalIntoArchiveFestivalPages;

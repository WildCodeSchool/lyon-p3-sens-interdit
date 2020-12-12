const path = require(`path`);

const makeRequest = require("./makeRequest");

const archiveProgramme = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const getArchiveProgramme = makeRequest(
    graphql,
    `
    {
      allStrapiArchivesOld {
        edges {
          node {
            id
            titre
            annee
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allStrapiArchivesOld.edges.forEach(({ node }) => {
      createPage({
        path: `/archives/programme/${node.annee}`,
        component: path.resolve(`src/templates/programmeOld.js`),
        context: {
          annee: node.annee,
        },
      });
    });
  });

  return getArchiveProgramme;
};

module.exports = archiveProgramme;

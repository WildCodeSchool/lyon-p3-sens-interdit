const path = require(`path`);

const { sluggify } = require("../utils/Sluggify");

const {
    removeNameForUrl: removePageNameForUrl,
  } = require("../utils/removeNameForUrl");

const makeRequest = require("../utils/makeRequest")


const turnFestivalsIntoPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const getFestivals = makeRequest(
    graphql,
    `
    {
      festivals: allStrapiFestival {
        edges{
          node {
            title
            id
            infopratique {
              id
            }
            festivalplace {
              id
            }
          }
        }
      }
    }
    `
  ).then(result => {
    // Loop over each festival
    result.data.festivals.edges.forEach(({ node }) => {
      let festivalSlug = sluggify(node.title);
      let festivalId = removePageNameForUrl(node.id, "Festival");
      // Create pages for each festival
      createPage({
        path: `/festival/${festivalSlug}${festivalId}`,
        component: path.resolve(`src/templates/festival.js`),
        context: {
          id: node.id,
        },
      });
      // Create pages for each festival's practical information
      createPage({
        path: `/festival/${festivalSlug}${festivalId}/infos`,
        component: path.resolve(`src/templates/festivalInfos.js`),
        context: {
          infoId: node.infopratique.id,
        },
      });
      // Create pages for each festival's places
      createPage({
        path: `/festival/${festivalSlug}${festivalId}/lieux`,
        component: path.resolve(`src/templates/festivalPlaces.js`),
        context: {
          placeId: node.festivalplace.id,
        },
      });
    });
  });

  // Query for spectacles nodes to use in creating pages.
  return getFestivals;
};


module.exports = turnFestivalsIntoPages;


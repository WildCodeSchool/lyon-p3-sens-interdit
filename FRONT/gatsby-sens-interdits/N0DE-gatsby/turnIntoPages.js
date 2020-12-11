const path = require(`path`);

const { sluggify } = require("./../src/utils/Sluggify");

const {
    removeNameForUrl: removePageNameForUrl,
  } = require("./../src/utils/removeNameForUrl");

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

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
        path: `/spectacle/${archiveSpectacleSlug}${archiveSpectacleId}`,
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

//programmeOld Generate////////////////////////////////////////////////////////////////

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
        path: `/programme/${node.annee}`,
        component: path.resolve(`src/templates/programmeOld.js`),
        context: {
          annee: node.annee,
        },
      });
    });
  });

  return getArchiveProgramme;
};
const turnArticlesIntoPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticlecontent {
        edges {
          node {
            title
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.

    result.data.allStrapiArticlecontent.edges.forEach(({ node }) => {
      let articleSlug = sluggify(node.title);
      let articleId = removePageNameForUrl(node.id, "Articlecontent");
      createPage({
        path: `/articles/${articleSlug}${articleId}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Query for articles nodes to use in creating pages.

  return getArticles;
};
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

module.exports.turnArchiveSpectaclesIntoPages = turnArchiveSpectaclesIntoPages;
module.exports.turnSpectaclesIntoPages = turnSpectaclesIntoPages;
module.exports.archiveProgramme = archiveProgramme;
module.exports.turnArticlesIntoPages = turnArticlesIntoPages;
module.exports.turnFestivalsIntoPages = turnFestivalsIntoPages;
module.exports.turnFestivalIntoArchiveFestivalPages = turnFestivalIntoArchiveFestivalPages;

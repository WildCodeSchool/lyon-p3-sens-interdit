const path = require(`path`);
const { sluggify } = require("./src/utils/Sluggify");

function removePageNameForUrl(text, pageName) {
  return text.replace(pageName, "");
}

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

async function turnSpectaclesIntoPages({ graphql, actions }) {
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
        path: `/spectacle/${spectacleSlug}${spectacleId}`, //strapiId
        component: path.resolve(`src/templates/spectacle.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Query for spectacles nodes to use in creating pages.
  return getSpectacles;
}

async function turnArchiveSpectaclesIntoPages({ graphql, actions }) {
  const { createPage } = actions;

  const getArchiveSpectacle = makeRequest(
    graphql,
    `
    {
        allStrapiArchivesOld {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArchivesOld.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/archiveSpectacle.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getArchiveSpectacle;
}

async function turnArticlesIntoPages({ graphql, actions }) {
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
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async params => {
  await Promise.all([
    turnArchiveSpectaclesIntoPages(params),
    turnSpectaclesIntoPages(params),
    turnArticlesIntoPages(params),
  ]);
};

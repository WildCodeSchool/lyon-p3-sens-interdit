const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem")

const { sluggify } = require("./src/utils/Sluggify");

function removeSpectacleForUrl(text) {
  return text.replace("Spectacle", "");
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
      let spectacleId = removeSpectacleForUrl(node.id);
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

async function turnArchivesIntoPage({ graphql, actions, reporter }) {
  const { createPage } = actions
  const result = await graphql(`
      {
        allStrapiArchivesOld(
          sort: { fields: id, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              titre
              id
              credits_2
              pays
              photo_1
              date_1
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // ...
  // Create blog-list pages
  const posts = result.data.allStrapiArchivesOld.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/archives` : `/archives/${i + 1}`,
      component: path.resolve("./src/templates/archives-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async params => {
  await Promise.all([
    turnArchiveSpectaclesIntoPages(params),
    turnSpectaclesIntoPages(params),
    turnArchivesIntoPage(params)
  ]);
};

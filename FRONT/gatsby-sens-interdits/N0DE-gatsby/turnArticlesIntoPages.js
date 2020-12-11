const path = require(`path`);

const { sluggify } = require("../src/utils/Sluggify");

const {
    removeNameForUrl: removePageNameForUrl,
  } = require("../src/utils/removeNameForUrl");

const makeRequest = require("./makeRequest")

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


module.exports.turnArticlesIntoPages = turnArticlesIntoPages;

// const path = require("path");

// async function turnSpectaclesIntoPages({ graphql, actions }) {
//   // 1. Get a template for this page
//   const spectacleTemplate = path.resolve(
//     "./src/components/specifics/Spectacle/index.js"
//   );
//   // 2. Query all spectacles
//   const { data } = await graphql(`
//     query {
//       spectacles: allStrapiSpectacle {
//         nodes {
//           title
//           strapiId
//           id
//         }
//       }
//     }
//   `);
//   // 3. Loop over each spectacle and create a page for that spectacle
//   data.spectacles.nodes.forEach(spectacle =>
//     actions.createPage({
//       // the url for the new page
//       path: `spectacle/${spectacle.strapiId}`,
//       component: spectacleTemplate,
//       context: {
//         id: spectacle.strapiId,
//       },
//     })
//   );
// }

// exports.createPages = async params => {
//   // Create pages dynamically
//   // 1. Spectacles
//   await turnSpectaclesIntoPages(params);
//   // 2. Archives
// };

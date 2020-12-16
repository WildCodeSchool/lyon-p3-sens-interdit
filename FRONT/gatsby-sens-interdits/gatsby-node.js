const turnArchiveSpectaclesIntoPages = require("./src/gatsby-node/turnArchiveSpectaclesIntoPages");
const turnSpectaclesIntoPages = require("./src/gatsby-node/turnSpectaclesIntoPages");
const archiveProgramme = require("./src/gatsby-node/archiveProgramme");
const turnArticlesIntoPages = require("./src/gatsby-node/turnArticlesIntoPages");
const turnFestivalsIntoPages = require("./src/gatsby-node/turnFestivalsIntoPages");
const turnFestivalIntoArchiveFestivalPages = require("./src/gatsby-node/turnFestivalIntoArchiveFestivalPages");
const turnNewSpectacleIntoArchive = require("./src/gatsby-node/turnNewSpectacleIntoArchive");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async params => {
  await Promise.all([
    turnArchiveSpectaclesIntoPages(params),
    turnSpectaclesIntoPages(params),
    archiveProgramme(params),
    turnArticlesIntoPages(params),
    turnFestivalsIntoPages(params),
    turnFestivalIntoArchiveFestivalPages(params),
    turnNewSpectacleIntoArchive(params),
  ]);
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};

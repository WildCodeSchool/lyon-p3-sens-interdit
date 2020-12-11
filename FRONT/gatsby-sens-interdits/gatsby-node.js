const turnArchiveSpectaclesIntoPages = require("./N0DE-gatsby/turnArchiveSpectaclesIntoPages");
const turnSpectaclesIntoPages = require("./N0DE-gatsby/turnSpectaclesIntoPages");
const archiveProgramme = require("./N0DE-gatsby/archiveProgramme");
const turnArticlesIntoPages = require("./N0DE-gatsby/turnArticlesIntoPages");
const turnFestivalsIntoPages = require("./N0DE-gatsby/turnFestivalsIntoPages");
const turnFestivalIntoArchiveFestivalPages = require("./N0DE-gatsby/turnFestivalIntoArchiveFestivalPages");

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
  ]);
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

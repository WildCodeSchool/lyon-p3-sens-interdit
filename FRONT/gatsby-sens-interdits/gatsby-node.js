const {
  turnArchiveSpectaclesIntoPages,
  turnSpectaclesIntoPages,
  archiveProgramme,
  turnArticlesIntoPages,
  turnFestivalsIntoPages,
  turnFestivalIntoArchiveFestivalPages,
} = require("./N0DE-gatsby/turnIntoPages");



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

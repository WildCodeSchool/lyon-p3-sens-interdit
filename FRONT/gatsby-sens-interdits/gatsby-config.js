require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [`festival`,`archives-old`, `spectacle`],
        singleTypes: [`global-menu`, `home-display-tab`, `hors-scene-page`, `logo-principal`, `assopage`]
      },
    },
  ],
};

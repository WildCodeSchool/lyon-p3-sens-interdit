require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [`festival`, `spectacle`,`archives-old`, `type-of-event`],
        singleTypes: [
          `global-menu`,
          `logo-principal`,
          `transmission`,
          `assopage`,
          `homepage`,
          `home-display-tab`,
          `partnerpage`,
          `newspage`,
          `newstab`,
          `hors-scene-page`,
          `hors-scene-tab`,
        ],
      },
    },
  ],
};

require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [`festival`, `spectacle`, `archives-old`, `infopratique`],
        singleTypes: [
          `global-menu`,
          `hors-scene-page`,
          `logo-principal`,
          `transmission`,
          `assopage`,
          `homepage`,
          `partnerpage`,
          `ecole`,
          `webradio`,
          `scolaire`,
          `seminaire`,
          `parole`,
        ],
      },
    },
  ],
};

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [`festival`, `spectacle`, `archives-old`],
        singleTypes: [
          `global-menu`,
          `home-display-tab`,
          `hors-scene-page`,
          `logo-principal`,
        ],
      },
      loginData: {
        identifier: "",
        password: "",
      },
    },
  ],
};

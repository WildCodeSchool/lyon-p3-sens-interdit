require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [`festival`, `spectacle`, `transmission`],
<<<<<<< HEAD
        singleTypes: [`global-menu`, `home-display-tab`, `hors-scene-page`]
=======
        singleTypes: [`global-menu`, `home-display-tab`,`hors-scene-page`],
>>>>>>> d242a72779064473bf7dae2eee3ea1afba464cc1
      },
    },
  ],
};

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
        singleTypes: [`global-menu`, `home-display-tab`]
=======
        singleTypes: [`global-menu`, `home-display-tab`],
>>>>>>> c627f6a4f7f7df246503b6ca3db1feff3c40b9ad
      },
    },
  ],
};

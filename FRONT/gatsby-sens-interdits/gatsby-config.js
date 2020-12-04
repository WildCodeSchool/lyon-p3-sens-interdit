require("dotenv").config();

module.exports = {
  siteMetadata:{
    title :"Festival Sens Interdit",
    description : "Biénnale Internationale de théâtre  ",
    url:"https://festival-sens-interdit",
    image:"",
    twitterUsername: "@sens-interdits",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [`festival`, `spectacle`,`archives-old`, `type-of-event`,`articlecontent`, `typeofarticle`],
        singleTypes: [
          `global-menu`,
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
          `home-display-tab`,
          `partnerpage`,
          `newspage`,
          `newstab`,
          `hors-scene-page`,
          `hors-scene-tab`,
          `archive-description`,
          `diffusion-production`
        ],
      },
    },
  ],
};

require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [
          `festival`,
          `spectacle`,
          `archives-old`,
          `type-of-event`,
          `articlecontent`,
          `typeofarticle`,
          `infopratique`,
          `festivalplace`,
          `festivalarchive`,
        ],
        singleTypes: [
          `global-menu`,
          `logo-principal`,
          `transmission`,
          `assopage`,
          `homepage`,
          `partnerpage`,
          `ecole`,
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
          `diffusion-production`,
          `mentions`,
          `conditions`,
          `programme`,
          `programm-tour`,
          `webradio`
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://wix.us10.list-manage.com/subscribe/post?u=bb60c0f0d68fe87e07e39b3ce&amp;id=8874bc7e3e", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    }
  ],
  siteMetadata:{
    title :"Sens Interdits - Festival international de théâtre",
    titleTemplate: "%s · Sens Interdits - Festival international de théâtre",
    description : "Biénnale Internationale de théâtre  ",
    url:"http://sensinterdits.org/",
    image:"",
    twitterUsername: "@sens-interdits",
  },
};

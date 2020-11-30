const path = require("path");

exports.createPage = async function ({ actions, graphql }) {
  const { errors, data } = await graphql(`
    query{
        allStrapiArchivesOld (sort: {fields: annee, order: DESC}){
            edges {
              node {
                id
                pays
                titre
                credits_2
                annee
                presentation
              }
            }
          }
    }
    `);
    if(errors){
      throw new Error("There was an error");
    }


  const archivePerPage = 10

  const numPages = Math.ceil(data.allStrapiArchivesOld.edges.length / archivePerPage)
  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/` : `/${index + 1}`,
      component: path.resolve("./src/components/specifics/Archive/FilterTab"),
      context: {
        limit: archivePerPage,
        skip: index * archivePerPage,
        numPages,
        currentPage: index + 1,



      }
    })
  })
}
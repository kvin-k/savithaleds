const path = require('path')

module.exports.createPages = async ({ graphql, actions })=>{
    const { createPage } = actions
    const productCardLED = path.resolve('./src/components/ProductCardLED.js') 
    const productCardCovid = path.resolve('./src/components/ProductCardCovid.js') 
    const response = await graphql(`
    query{
        allContentfulLedProducts{
          edges{
            node{
              title
            }
          }
        }
        allContentfulCovidProducts{
          edges{
            node{
              title
            }
          }
        }
      }
    `)

    response.data.allContentfulLedProducts.edges.forEach((edge)=>{
        createPage({
            component: productCardLED,
            path: `/${edge.node.title.replace(/\s/g,'')}`,
            context: {
                slug: edge.node.title
            }
        })
    })
    response.data.allContentfulCovidProducts.edges.forEach((edge)=>{
      createPage({
          component: productCardCovid,
          path: `/${edge.node.title.replace(/\s/g,'')}`,
          context: {
              slug: edge.node.title
          }
      })
  })
}

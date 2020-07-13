// const path = require('path')

// module.exports.createPages = async ({ graphql, actions })=>{
//     const { createPage } = actions
//     const ProductCard = path.resolve('./src/pages/ProductCard.js') 
//     const productsLED = path.resolve('./src/data/products-leds.js')
//     const productsCovid = path.resolve('./src/data/products-covid.js')
//     // const response = await graphql(`
//     // query{
//     //     allContentfulBlogPost{
//     //       edges{
//     //         node{
//     //           slug
//     //         }
//     //       }
//     //     }
//     //   }
//     // `)

//     productsLED.forEach((product)=>{
//         createPage({
//             component: ProductCard,
//             path: `/ProductCard/${product.title}`,
//             context: {
//                 slug: product.title
//             }
//         })
//     })
// }


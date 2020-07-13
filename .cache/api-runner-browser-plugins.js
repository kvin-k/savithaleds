module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-modal-routing/gatsby-browser.js'),
      options: {"plugins":[],"appElement":"#___gatsby","modalProps":{}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

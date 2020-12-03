/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: "AIzaSyAF_rrw8aXmnnghHeyb9wWVWFiuu9nlytg",
          authDomain: "store-15577.firebaseapp.com",
          databaseURL: "https://store-15577.firebaseio.com",
          projectId: "store-15577",
          storageBucket: "store-15577.appspot.com",
          messagingSenderId: "903243990178",
          appId: "1:903243990178:web:f35b9eadde4bf9906203fb",
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `angular shop`,
        short_name: `angular`,
        description: `angular shop app.`,
        lang: `es`,
        display: `standalone`,
        icon: `src/assets/img/icon.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      }
    }
  ],
}

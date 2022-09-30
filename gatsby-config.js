// const options =

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `react-bootstrap`,
    `bootstrap`,
    `gatsby-plugin-styled-components`,
    `swiper`,
    `aos`,
    `react-parallax`,
    `react-countup`,
    `typewriter-effect`,
    `react-visibility-sensor`,
    `axios`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `react-lottie`,
    /// `strapi-plugin-populate-deep`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `https://codefulcrum-strapi.herokuapp.com`,
    //     collectionTypes: ["image-sliders"],
    //     singleTypes: [],
    //     queryLimit: 5000,
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-ZYEBDFYEMW"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        minimum: 0.4,
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
};

//accessToken: `fe8feb2a741f1508f6dd8410ebafd3bce7fa414c0992b3c88ef711fe3594b247db7b50b8b4b4931181ab2362dcb7b8a0022a06d1a0b20617a115db0f299778c0b04abc4ad80fad573cfad58d29abea1d715cf925e5e649c4ce9d15c8141526dde1a1a1809228fbac7f15597624e10fdfc57f31cf9c2d1c2b2e441e331ad85981`,

// {
//   singularName: "services-home",
//   queryParams: {
//     populate: {
//       // metadata: {
//       //   populate: "*",
//       // },
//       //populate: "*",
//       cardData: {
//         populate: "*",
//         // img: {
//         //   populate: "*",
//         // },
//       },
//       // img: {
//       //   populate: "*",
//       // },
//     },
//   },
// },

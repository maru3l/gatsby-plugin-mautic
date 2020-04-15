# gatsby-plugin-mautic

Add Mautic tracking code to your Gatsby site.

## Install

`npm install --save gatsby-plugin-mautic`

## How to use

```
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mauric`,
      options: {
        // The URL where mautic is installed
        hostUrl: "YOUR_HOST_URL",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],
}
```

## Options

### `hostUrl`

The URL of your Mautic server. It sould look like `https://mautic.youdomaine.com/`

### `head`

Where do you want to place the MT script? By putting `head` to `true`, it will be placed in the "<head>" of your website. By setting it to `false`, it will be placed in the "<body>". The default value resolves to `false`.

### `exclude`

If you need to exclude any path from the tracking system, you can add it (one or more) to this optional array as glob expressions.

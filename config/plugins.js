module.exports = ({ env }) => ({
    // ...
    jwt: {
      // ...
      enabledPlugins: [
        'content-type-builder' // Add this line
      ]
    },
    // ...
  });
  
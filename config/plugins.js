module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'recipesrestourant',
        api_key: 315947387571343,
        api_secret: 'R1mx1St5S44zgLvXoJcl_P0djEY',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
})
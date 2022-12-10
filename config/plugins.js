module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xlarge: 1500,
        large: 1000,
        medium: 750,
        small: 500,
      },
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});

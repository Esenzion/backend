module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e33c988524df1d36ff2ac335ffdf323f'),
  },
});

export default () => ({
  port: process.env.PORT ?? '3000',
  token: {
    member: process.env.MEMBER_AUTH_TOKEN,
    admin: process.env.ADMIN_AUTH_TOKEN,
  },
});

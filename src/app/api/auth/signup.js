import { handleLogin } from '@auth0/nextjs-auth0';


const signupHandler = (req, res) =>
  handleLogin(req, res, {
    authorizationParams: {
      screen_hint: 'signup',
    },
  });

export default signupHandler;
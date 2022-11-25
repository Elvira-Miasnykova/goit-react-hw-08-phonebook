import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box';

const Login = () => {
  return (
    <Box as="div" display="flex" justifyContent="center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  )
};

export default Login;


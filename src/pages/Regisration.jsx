import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box';


const Registration = () => {
  return (
    <Box as="div" display="flex" justifyContent="center">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  )
};

export default Registration;




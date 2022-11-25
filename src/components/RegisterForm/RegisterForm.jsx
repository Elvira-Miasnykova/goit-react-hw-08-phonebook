import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { LabelStyled, InputStyled, ButtonStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as="form" width="320px" onSubmit={handleSubmit} autoComplete="off" bg="muted"  border="normal" borderRadius="normal" borderColor="accent" display="block" p={3} mb={3}>
      <LabelStyled>
        Username
              <InputStyled
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name must contain only letters(uppercase, lowercase)."
              />
      </LabelStyled>
      <LabelStyled>
        Email
              <InputStyled
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
      </LabelStyled>
      <LabelStyled>
        Password
              <InputStyled
                  type="password"
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Password must contain one  number and one uppercase and lowercase letter, 8 or more characters"
              />
      </LabelStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </Box>
  );
};

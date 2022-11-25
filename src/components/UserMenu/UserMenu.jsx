import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Name, Wraper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wraper>
      <Name>Welcome, {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wraper>
  );
};
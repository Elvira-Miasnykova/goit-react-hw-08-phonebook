import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, lazy} from "react";
import { useDispatch } from "react-redux";
import { Layout } from '../Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'hooks';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Loader } from 'components/Loader/Loader';
//import { Box } from 'components/Box';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Regisration'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  
  const { isRefreshing } = useAuth();

   useEffect(() => {
     dispatch(refreshUser());
   }, [dispatch]);

    
  return (
    <Container>
      {isRefreshing ? (
        <Loader/>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<HomePage />} /> */}
            <Route index element={<Navigate to="home" />} />
            <Route path='home' element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  )
};
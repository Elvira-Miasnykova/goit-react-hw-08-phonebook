import { Route, Routes, Navigate } from 'react-router-dom';
//import { Contacts } from 'pages/Contacts';
import { useEffect} from "react";
import { useDispatch } from "react-redux";
//import { fetchContacts } from 'redux/contacts/operations';
//import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home';
import { Registration } from 'pages/Regisration';
import { Login } from '../../pages/Login';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'hooks';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Contacts } from 'pages/Contacts';

 //const HomePage = lazy(() => import('../../pages/Home'));
 //const RegisterPage = lazy(() => import('../../pages/Regisration'));
// const LoginPage = lazy(() => import('../../pages/Login'));
//const ContactsPage = lazy(() => import('../../pages/Contacts'));
//const ContactsPage = lazy(() => import('../../pages/Contacts')); 


export function App() {
  const dispatch = useDispatch();
  
  const { isRefreshing } = useAuth();

   useEffect(() => {
     dispatch(refreshUser());
   }, [dispatch]);

  
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  
  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<HomePage />} /> */}
            <Route index element={<Navigate to="home" />} />
            <Route path='home' element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Registration />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  )
};
import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home';
import { Registration } from 'pages/Regisration';
import { Login } from 'pages/Login';


export function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Navigate to="home" />} />
          <Route path='home' element={<Home/>}/>
          <Route path='contacts' element={<Contacts />} />
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
};
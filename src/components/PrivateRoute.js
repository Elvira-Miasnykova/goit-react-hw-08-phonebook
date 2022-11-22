
// import { useAuth } from "hooks"
// //import { useSelector } from "react-redux"
// import { Route, Navigate } from "react-router-dom"

// export const PrivateRoute = ({ children, ...routeProps }) => {
//     const isLoggedIn = useAuth();
//     return <Route {...routeProps}>
//         {isLoggedIn ? children : <Navigate to="/register/"/>}
//     </Route>
// }

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

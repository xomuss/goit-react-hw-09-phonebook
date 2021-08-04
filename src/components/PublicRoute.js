import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  children,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => {
  const isLogined = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLogined && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};
// render={props =>
//   isAuthenticated && routeProps.restricted ? (
//     <Redirect to={redirectTo} />
//   ) : (
//     <Component {...props}

export default PublicRoute;

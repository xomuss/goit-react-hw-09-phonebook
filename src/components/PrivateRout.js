import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

//  connect(mapStateToProps)(PrivateRoute);

export default function PrivateRoute({
  children,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) {
  const isLogined = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLogined ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

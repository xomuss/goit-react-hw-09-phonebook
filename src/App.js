import { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routs from './routs';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRout';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./views/HomePage'));
const RegistrationPage = lazy(() => import('./views/RegistrationPage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Download...</p>}>
        <Switch>
          <Route exact path={routs.home} component={HomePage} />
          <PrivateRoute
            path={routs.contacts}
            component={ContactsPage}
            redirectTo={routs.login}
          />
          <PublicRoute
            path={routs.registration}
            component={RegistrationPage}
            restricted
            redirectTo={routs.contacts}
          />
          <PublicRoute
            path={routs.login}
            restricted
            component={LoginPage}
            redirectTo={routs.contacts}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

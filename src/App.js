import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
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
          <PublicRoute exact path={routs.home}>
            <HomePage />
          </PublicRoute>
          <PrivateRoute path={routs.contacts} redirectTo={routs.login}>
            <ContactsPage />
          </PrivateRoute>
          <PublicRoute
            path={routs.registration}
            restricted
            redirectTo={routs.contacts}
          >
            <RegistrationPage />
          </PublicRoute>
          <PublicRoute
            path={routs.login}
            restricted
            redirectTo={routs.contacts}
          >
            <LoginPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

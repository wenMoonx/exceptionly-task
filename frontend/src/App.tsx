/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import AuthContextProvider from './context';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import PrivateRouter from './routes/PrivateRouter';
import PublicRouter from './routes/PublicRouter';
import './App.css';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <AuthContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Auth} />
            <PrivateRouter path="/dashboard" component={Dashboard} />
            <PublicRouter path="/auth" component={Auth} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
      <ToastContainer />
    </Router>
  );
};

export default App;

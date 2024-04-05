import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';

function App() {
  // return (
  //   <BrowserRouter>
  //     <Switch>
  //       <Route path="/signin">SignIn</Route>
  //       <Route path="/">Home</Route>
  //     </Switch>
  //   </BrowserRouter>
  // );

  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;

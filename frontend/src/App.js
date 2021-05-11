import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import LoggedIn from './pages/LoggedIn';
import UnAuthorized from './pages/UnAuthorized';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <PrivateRoute component={LoggedIn} path="/loggedin" exact />
        <Route exact path="/unauthorized">
          <UnAuthorized />
        </Route>
      </Switch>
  </Router>
  </Provider>
  );
 
}

export default App;

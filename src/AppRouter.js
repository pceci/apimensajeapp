import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Login from './components/Login';
import NotaLista from './components/NotaLista';

export default function AppRouter() {
  return (
    <Router>
      <div>
       {/*  <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notalista">NotaLista</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/notalista" component={NotaLista}>
     
          </Route>
          <Route path="/login" component={Login}>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
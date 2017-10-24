import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from edit page
  </div>
);

const HelpPage = () => (
  <div>
    This is from help page
  </div>
);

const NotfoundPage = () => (
  <div>
    Page not found - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/" href="/" >Home</Link>
    <Link to="/create" href="/create" >Create</Link>
    <Link to="/edit" href="/edit" >Edit</Link>
    <Link to="/help" href="/help" >Help</Link>
    
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={1} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route component={NotfoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

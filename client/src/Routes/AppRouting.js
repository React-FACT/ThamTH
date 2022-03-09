import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Component/Auth/Login';
import ListUser from '../Component/Admin/ListUser';

function AppRouting(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/listuser' component={ListUser} />
      </Switch>
    </Router>
  );
}
export default AppRouting;

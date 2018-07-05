import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom'
import LayoutWrapper from './components/LayoutWrapper'
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home" component={LayoutWrapper}/>
  </Switch>
)

export default App;

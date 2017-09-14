import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './budget/Dashboard';
import Profile from './Profile';
import Bills from './budget/bills/BillList';
import BillsNew from './budget/bills/BillsNew';
import BillShow from './budget/bills/BillShow';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Switch>
              <Route exact path="/bills/new" component={BillsNew} />
              <Route excat path ="/bills/:bill_id" component={BillShow} />
              <Route exact path="/bills" component={Bills} />
            </Switch>
            <Route exact path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

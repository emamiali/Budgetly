import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './budget/Dashboard';

import Profile from './profile/Profile';
// import ProfileEdit from './profile/ProfileEdit';

import Bills from './budget/bills/BillList';
import BillsNew from './budget/bills/BillsNew';
import BillShow from './budget/bills/BillShow';

import Spendings from './budget/spendings/SpendingList';
import SpendingNew from './budget/spendings/SpendingNew';
import SpendingShow from './budget/spendings/SpendingShow';

import Savings from './budget/savings/SavingsList';
import SavingNew from './budget/savings/SavingNew';
import SavingShow from './budget/savings/SavingShow';

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
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/bills/new" component={BillsNew} />
              <Route exact path ="/bills/:bill_id" component={BillShow} />
              <Route exact path="/bills" component={Bills} />
              <Route exact path="/spendings/new" component={SpendingNew} />
              <Route exact path ="/spendings/:spending_id" component={SpendingShow} />
              <Route exact path="/spendings" component={Spendings} />
              <Route exact path="/savings/new" component={SavingNew} />
              <Route exact path="/savings/:saving_id" component={SavingShow}/>
              <Route exact path="/savings" component={Savings}/>
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

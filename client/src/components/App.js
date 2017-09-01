import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h1>Dashboard</h1>
const NewSpending = () => <h1>Form for new spending</h1>
const Profile = () => <h1>Profile Page</h1>


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
            <Route exact path="/spending/new" component={NewSpending} />
            <Route exact path="profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Header = () => <p>Header</p>
const Landing = () => <h1>This is the landing page</h1>
const Dashboard = () => <h1>Dashboard</h1>
const NewSpending = () => <h1>Form for new spending</h1>


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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);

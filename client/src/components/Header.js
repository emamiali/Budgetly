import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


//this.props gets auth after going thourgh the middleware redux-thunk

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return(
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return(
          <div>
            <li><Link to='/profile'>Profile</Link></li>
            <li><a href="/api/logout">Logout</a></li>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
          >
            Budgetly
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);

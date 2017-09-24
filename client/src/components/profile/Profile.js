import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Profile extends Component {
  componentDidMount() {
    this.props.auth;
  }
  renderContent() {
    const { auth } = this.props;

    if (!auth) {
      return <div>Loading ...</div>
    }
    const newAvatarSize = "300"
    var imageStr = auth.data.avatar;
    var newImageStr = imageStr.split("?sz=50")[0]+"?sz="+newAvatarSize;

    console.log(this.props.auth.data);
    return (
      <div>
        <div className="row">
          <div className="col s6">
            <img src={newImageStr} />
            <p><strong>Name --- </strong>{auth.data.name}</p>
            <p><strong>Email --- </strong>{auth.data.email}</p>
          </div>
          <div className="col s6">
            <p><strong>Savings --- </strong></p>
            <p><strong>Total Earning --- </strong></p>
            <Link to={`/profile/${auth.data._id}/edit`} className="waves-effect waves-light btn">
              Add fundings and savings Goal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Profile);

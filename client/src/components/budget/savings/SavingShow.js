import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSaving, deleteSaving } from '../../../actions';

class SavingShow extends Component {
  componentDidMount() {
    const { saving_id } = this.props.match.params;
    this.props.fetchSaving(saving_id);
  }

  onDeleteClick() {
    const { saving_id } = this.props.match.params;
    this.props.deleteSaving(saving_id, () => {
      this.props.history.push('/dashboard');
    })
  }

  render() {
    const { saving } = this.props;

    if(!saving) {
      return <div>Loading ... </div>
    }

    return (
      <div>
        <Link to="/dashboard">{'<'} Back To Dashboard</Link>
        <div className="right-align">
          <button
            className="btn waves-light red"
            onClick={this.onDeleteClick.bind(this)}
          >
          Delete Saving</button>
        </div>
        <div className="collection center-align">
          <h3 className="collection-item">Title: { saving.savingTitle }</h3>
          <h4 className="collection-item">Amount: {saving.savingAmount}</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ savings }, ownProps) {
  return { saving: savings[ownProps.match.params.saving_id]}
}

export default connect(mapStateToProps, { fetchSaving, deleteSaving })(SavingShow);

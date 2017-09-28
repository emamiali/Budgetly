import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavingsIncome } from '../../actions';

import NewTotalFunds from './NewTotalFunds';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state= {
      newTotalFundsFormVisible: false,
      addNewSavingsAndIncome: true
    }
    this.showNewTotalFundsForm = this.showNewTotalFundsForm.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  componentDidMount() {
    this.props.auth;
    this.props.fetchSavingsIncome();
  }


//have to fix this issue, here.
  forceUpdateHandler(){
    this.forceUpdate();
    console.log('clicked');
  }

  showNewTotalFundsForm(){
    this.setState({
      newTotalFundsFormVisible: !this.state.newTotalFundsFormVisible,
      addNewSavingsAndIncome: !this.state.addNewSavingsAndIncome
     });
  }

  renderContent() {
    const { auth } = this.props;
    const { total } = this.props;

    if (!auth) {
      return <div>Loading ...</div>
    }
    const newAvatarSize = "300"
    var imageStr = auth.avatar;
    var newImageStr = imageStr.split("?sz=50")[0]+"?sz="+newAvatarSize;

    const noSavingsAndIncomeView =
      <div>
        <div className="section"></div>
        <div className="col s6">Please add an income and a savings goal</div>
        <div className="section"></div>
      </div>;

    const addNewSavingsAndIncomeButton =
      <div>
        <div className="section"></div>
        <button
          onClick={() => this.showNewTotalFundsForm()}
          className="waves-effect waves-light btn"
        >
          Add Savings Goal and Income
        </button>
      </div>;

    return (
      <div className="row">
        <div className="col s6">
          <img src={newImageStr} />
          <p><strong>Name --- </strong>{auth.name}</p>
          <p><strong>Email --- </strong>{auth.email}</p>
        </div>
        <div className="col s6">
          { (!total || total.data.length === 0) ? noSavingsAndIncomeView :
          <div>
            <p><strong>Savings --- </strong>  {total.data[0].savingsGoal}</p>
            <p><strong>Total Earning --- {total.data[0].income}</strong>  </p>
          </div>
          }
          { this.state.addNewSavingsAndIncome ? addNewSavingsAndIncomeButton :  null }
          { this.state.newTotalFundsFormVisible ?
            <NewTotalFunds
              showNewTotalFundsForm={this.showNewTotalFundsForm}
              forceUpdateHandler={this.forceUpdateHandler}
            />
          : null }
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
  return {
    auth: state.auth,
    total: state.savingIncome
   }
}

export default connect(mapStateToProps, { fetchSavingsIncome })(Profile);

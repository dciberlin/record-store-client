import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchRecords } from '../actions';
import Record from './Record';

class Dashboard extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn) this.props.fetchRecords();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    const recordsList = this.props.records.map(el => {
      return <Record data={el}></Record>;
    });

    return (
      <>
        {isLoggedIn ? (
          <div id="dashboard" className="page thirdColor">
            <h1>Dashboard</h1>
            {recordsList}
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
}

const mapsStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn, records: state.records };
};

export default connect(mapsStateToProps, { fetchRecords })(Dashboard);

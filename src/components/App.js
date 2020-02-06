import React from 'react';
import '../scss/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Navigation from './Navigation';
import NotFound from './NotFound.js';
import Loading from './Loading.js';
import { auth } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    const loading = this.props.loading;

    return (
      <div id="app">
        {loading && <Loading></Loading>}
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn, loading: state.loading };
};

export default connect(mapsStateToProps, { auth })(App);

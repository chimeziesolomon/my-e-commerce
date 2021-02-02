import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './default.scss';
import Recovery from './pages/Recovery';
import { auth } from './firebase/utils';
import Homepage from './pages/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

import Header from './components/Header';

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.setState({ currentUser: user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ currentUser: null });
        localStorage.removeItem('user');
      }
      // if (userAuth) {
      //   const userRef = await handleUserProfile(userAuth);
      //   userRef.onSnapshot((snapshot) => {
      //     this.setState({
      //       currentUser: {
      //         id: snapshot.id,
      //         ...snapshot.data(),
      //       },
      //     });
      //   });
      // }
      // this.setState({
      //   ...initialState,
      // });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <div className="app">
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            <Route
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <Signup />)}
            />
            <Route
              path="/login"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <Login currentUser={currentUser} />
                )
              }
            />
            <Route path="/recovery" render={() => <Recovery />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

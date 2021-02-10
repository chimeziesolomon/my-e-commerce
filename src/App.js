import React, { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './default.scss';
// hoc
import withAuth from './hoc/withAuth';
import { connect } from 'react-redux';
import Recovery from './pages/Recovery';
import { auth, handleUserProfile } from './firebase/utils';
import Homepage from './pages/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { setCurrentUser } from './redux/User/user.actions';
import Header from './components/Header';

//const initialState = {
//	currentUser: null
//};

const App = (props) => {
	const { setCurrentUser, currentUser } = props;

	useEffect(() => {
		const authListener = auth.onAuthStateChanged(async (userAuth) => {
			//if (user) {
			//	this.setState({ currentUser: user });
			//	localStorage.setItem('user', user.uid);
			//} else {
			//	this.setState({ currentUser: null });
			//	localStorage.removeItem('user');
			//}
			if (userAuth) {
				//	const userRef = await handleUserProfile(userAuth);
				//	userRef.onSnapshot((snapshot) => {
				//setCurrentUser({
				//	id: snapshot.id,
				//	...snapshot.data()
				//});
				//	});
			}
		});
		return () => {
			authListener();
		};
	}, []);
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" render={() => <Homepage />} />
					<Route path="/signup" render={() => <Signup />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="/recovery" render={() => <Recovery />} />
					<Route
						path="/dashboard"
						render={() => (
							<withAuth>
								{' '}
								<Dashboard />{' '}
							</withAuth>
						)}
					/>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

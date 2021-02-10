import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.scss';
import { signInUser } from './../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import { signInWithGoogle } from '../../firebase/utils';

const mapState = ({ user }) => ({
	signInSuccess: user.signInSuccess
});

const Login = (props) => {
	const { signInSuccess } = useSelector(mapState);
	const dispatch = useDispatch();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	useEffect(
		() => {
			if (signInSuccess) {
				resetForm();
				props.history.push('/');
			}
		},
		[ signInSuccess ]
	);

	const resetForm = () => {
		setEmail('');
		setPassword('');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signInUser({ email, password }));
	};

	const configAuthWrapper = {
		headline: 'Login'
	};
	return (
		<AuthWrapper {...configAuthWrapper}>
			<div className="formWrap">
				<form onSubmit={handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						placeholder="Email"
						handleChange={(e) => setEmail(e.target.value)}
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						placeholder="Password"
						handleChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit">Login</Button>
					<div className="socialSignin">
						<div className="row">
							<Button onClick={alert}>Sign in with Google</Button>
						</div>
					</div>
					<div className="links">
						<Link to="/recovery">Reset Password</Link>
					</div>
				</form>
			</div>
		</AuthWrapper>
	);
};

export default withRouter(Login);

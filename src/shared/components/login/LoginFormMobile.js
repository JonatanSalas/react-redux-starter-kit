import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';


class LoginFormMobile extends React.Component {
	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
		handleRegister: PropTypes.func.isRequired,
		handlePasswordForget: PropTypes.func.isRequired
	}

	render() {
		const { handleSubmit, handleRegister, handlePasswordForget } = this.props;

		return (
			<form method="POST" onSubmit={handleSubmit}>
				<div>
					<TextField floatingLabelText='Username' fullWidth/>
				</div>
				<div>
					<TextField floatingLabelText='Password' fullWidth/>
				</div>
				<div>
					<FlatButton label='Register' onClick={handleRegister} primary/>
					<FlatButton label='Forgot password?' onClick={handlePasswordForget} primary/>
					<RaisedButton label='Login' type='submit' primary/>
				</div>
			</form>
		);
	}
}

export default LoginFormMobile;
import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Settings from 'material-ui/svg-icons/action/settings';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/social/person';


class AppBarMenu extends React.Component {
	static propTypes = {
		isMobile: PropTypes.bool.isRequired,
		image: PropTypes.string
	};

	render() {
		return (
			<IconMenu
				onItemTouchTap={this.onItemTouch}
				iconButtonElement={this.getIconButton()}
				anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				targetOrigin={{horizontal: 'left', vertical: 'top'}}
			>
				<MenuItem
					leftIcon={<Person color="#757575"/>}
					primaryText="Profile"
					value="/dashboard/profile"
				/>
				<MenuItem
					leftIcon={<Settings color="#757575"/>}
					primaryText="Settings"
					value="/dashboard/settings"
				/>
				<MenuItem
					leftIcon={<Logout color="#757575"/>}
					primaryText="Logout"
					value="/login"
				/>
			</IconMenu>
		);
	}

	onItemTouch = (event, child) => this.props.router.push(child.props.value);

	getIconButton = () => {
		let content = <MoreVert color="white"/>;

		if (!this.props.isMobile) {
			const styles = this.getStyles();

			if (this.props.image) {
				content = <img src={this.props.image} style={styles.image}/>;
			} else {
				content = <AccountCircle color="white" style={styles.image}/>;
			}
		}

		return (
			<IconButton>
				{content}
			</IconButton>
		)
	}

	getStyles = () => {
		return {
			image: {
				width: "60px",
				height: "60px",
				marginBottom: "10px",
				borderRadius: "50%"
			}
		}
	}
}

export default withRouter(AppBarMenu);
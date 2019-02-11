import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Menu from './components/Menu';
import List from './components/List';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fireMeUp, getMails, getInboxMails } from 'rdx/actions/App'
const styles = theme => ({
	contentWrapper: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	menu: {
		width: '250px',
		height: '100%',
		float: 'left'
	},
	list: {
		float: 'left',
		width: 'calc(100% - 250px)'
	}
})


class App extends Component {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(fireMeUp());
		this.getInboxMails("inbox");
	}

	getInboxMails = (container) => {
		const { dispatch } = this.props;
		dispatch(getMails(container))
	};

	menuItemClicked = (e, container) => {
		this.getInboxMails(container)
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar mails={this.props.app.mails} />
				<div className={classes.contentWrapper}>
					<Menu className={classes.menu} handleClick={this.menuItemClicked} />
					<List className={classes.list} mails={this.props.app.mails} />
				</div>
			</div>
		);
	}
}


export default connect((state) => state)(withStyles(styles)(App));

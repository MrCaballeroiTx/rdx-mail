import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Menu from './components/Menu';
import List from './components/List';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fireMeUp, getMails, getInboxMails } from 'rdx/actions/App'
import { LinearProgress } from '@material-ui/core';
import MailWindow from './components/MailWindow';
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
	},
})


class App extends Component {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(fireMeUp());
		setTimeout(() => (this.getInboxMails("inbox")), 2000);
	}

	getInboxMails = (container) => {
		const { dispatch } = this.props;
		dispatch(getMails(container));
	};

	menuItemClicked = (e, container) => {
		this.getInboxMails(container);
	};

	handleSearch = (keywords, container) => {
		const { dispatch } = this.props;
		const search = keywords.toLowerCase();
		dispatch(getMails(container, search))
	};

	render() {
		const { classes } = this.props;
		const isFetching = this.props.app.isFetching;
		return (
			<div>
				<AppBar mails={this.props.app.mails} isFetching={isFetching} handleSearch={this.handleSearch} />
				<div className={classes.contentWrapper}>
					{isFetching ? <LinearProgress /> : ''}
					<Menu className={classes.menu} handleClick={this.menuItemClicked} />
					<List className={classes.list} mails={this.props.app.mails} />
					<MailWindow />
				</div>
			</div>
		);
	}
}


export default connect((state) => state)(withStyles(styles)(App));

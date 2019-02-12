import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
	appBar: {
		position: 'fixed'
	},
	flex: {
		flex: 1,
	},
	mailWindow: {
		height: '50%',
		top: 'initial',
		left: 'initial',
		bottom: 0,
		right: '0 !important',
		width: '35%',
		position: 'fixed'
	},
	list: {
		marginTop: 70
	}
};

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class MailWindow extends Component {
	state = {
		open: false,
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleDelete = (e, id) => {
		e.preventDefault();
		this.props.deleteMail(id);
	};

	render() {
		const { classes, mail } = this.props;
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
					READ MAIL
				</Button>
				<Dialog
					fullScreen
					open={this.state.open}
					onClose={this.handleClose}
					TransitionComponent={Transition}
					className={classes.mailWindow}
				>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" color="inherit" className={classes.flex}>
								{mail.subject.toUpperCase()}
							</Typography>
							<Button color="secondary" onClick={(e) => this.handleDelete(e, mail.id)}>
								delete
							</Button>
							<Button color="inherit" onClick={this.handleClose}>
								save
							</Button>
						</Toolbar>
					</AppBar>
					<List className={classes.list}>
						<ListItem button>
							<ListItemText primary={mail.from} secondary={mail.subject} />
						</ListItem>
						<Divider />
						<ListItem>
							<p>{mail.body}</p>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	};
};

MailWindow.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailWindow);
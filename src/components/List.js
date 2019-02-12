import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip, List, ListItem, ListItemText, Checkbox } from '@material-ui/core';
import MailWindow from './MailWindow';

const styles = theme => ({
  root: {
    margin: '10px 27px',
    backgroundColor: theme.palette.background.paper,
  },
  span: {
    marginLeft: '20px'
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class CheckboxList extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = mail => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(mail);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(mail);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes, className, mails } = this.props;

    return (
      <div className={className}>
        <List className={classes.root}>
          {mails.map(mail => (
            <ListItem key={mail.id} role={undefined} dense button onClick={this.handleToggle(mail)}>
              <Checkbox
                checked={this.state.checked.indexOf(mail) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText>
                <strong>
                  {mail.from}
                </strong>
                <span className={classes.span}>
                  {mail.subject}
                </span>
                <span className={classes.span}>
                  {mail.body}
                </span>
                <Chip label={mail.read ? 'Read' : 'NonRead'} className={classes.chip} />
              </ListItemText>
              <MailWindow mail={mail} deleteMail={this.props.deleteMail} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
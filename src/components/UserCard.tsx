import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {UserCardProps} from "../interfaces";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  month}) => {

  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined" style={{ margin: 5 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {firstName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {lastName}
        </Typography>
        <Typography variant="body2" component="p">
          {month}
        </Typography>
      </CardContent>
    </Card>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
};
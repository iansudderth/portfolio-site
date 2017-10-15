import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styleSheet = {
  card: {
    padding: 24,
    marginTop: 24,
    transition: '.5s',
    '&:hover': {
      transform: 'scale(1.025)',
    },
  },
  headline: {},
  icon: {
    float: 'right',
    height: 100,
    width: 100,
    '@media(max-width: 480px)': {
      height: 50,
      width: 50,
    },
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
  },
};

const ConnectPage = props => {
  const { card, headline, icon, textGroup } = props.classes;

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={9} lg={8}>
        <Card className={card}>
          <Avatar src="/static/email-icon.png" className={icon} />
          <div className={textGroup}>
            <Typography type="display1" className={headline}>
              {'Email'}
            </Typography>
            <Typography type="headline">
              <a href="mailto:ian.sudderth@gmail.com">
                {'Ian.Sudderth@gmail.com'}
              </a>
            </Typography>
          </div>
        </Card>
        <Card className={card}>
          <Avatar src="/static/github-icon.png" className={icon} />
          <div className={textGroup}>
            <Typography type="display1" className={headline}>
              {'GitHub'}
            </Typography>
            <Typography type="headline">
              <a
                href="https://github.com/iansudderth"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'github.com/iansudderth'}
              </a>
            </Typography>
          </div>
        </Card>
        <Card className={card}>
          <Avatar src="/static/linked-in-icon.png" className={icon} />
          <div className={textGroup}>
            <Typography type="display1" className={headline}>
              {'LinkedIn'}
            </Typography>
            <Typography type="headline">
              <a
                href="http://www.linkedin.com/in/ian-sudderth"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'View My Profile'}
              </a>
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

ConnectPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(ConnectPage);

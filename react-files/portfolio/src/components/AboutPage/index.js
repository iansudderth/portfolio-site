import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styleSheet = {
  nameText: {
    padding: '24px',
  },
  descriptionGroup: {
    padding: '24px',
  },
  bodyText: {
    paddingTop: '24px',
  },
  avatar: {
    width: 200,
    height: 200,
    float: 'right',
    marginBottom: 16,
    marginLeft: 16,
    '@media(max-width: 600px)': {
      width: 100,
      height: 100,
    },
  },
};
const AboutPage = props => {
  const { nameText, descriptionGroup, bodyText, avatar } = props.classes;

  return (
    <div>
      <Grid container spacing={24} justify="center">
        <Grid item xs={11} sm={10} md={9} lg={8}>
          <Card>
            <Typography className={nameText} type="display2">
              {'Ian Sudderth'}
            </Typography>
            <Divider />
            <div className={descriptionGroup}>
              <Avatar src="/static/selfie.jpg" className={avatar} />
              <Typography type="headline">About Me</Typography>
              <Typography type="body1" className={bodyText}>
                {
                  'My name is Ian Sudderth and I am a Full-Stack developer and Educator.  I am thoroughly proficient in HTML, CSS, JavaScript, React, Redux, SASS, Node, Express, MongoDB, SQL, and Python.  I also have experience with design tools like Photoshop and Illustrator.  I am currently based in New York City.'
                }
              </Typography>
              <Typography type="body1" className={bodyText}>
                {
                  'Outside of coding, I have worked in Technology Education as an instructor for the New York Public Library, teaching and developing curricula for coding, Excel, and design classes.  I have excellent leadership skills and a great attention to detail.  I very much enjoy learning new things and am always eager to pick up new skills or improve my existing ones.'
                }
              </Typography>
              <Typography type="body1" className={bodyText}>
                {
                  "In my personal life, I'm a huge music nerd, I love discovering new artists and going to shows. I am also a soccer fan, love to cook, enjoy good conversation, dogs, and dive bars."
                }
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

AboutPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(AboutPage);

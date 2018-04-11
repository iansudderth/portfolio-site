import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styleSheet = {
  container: {
    padding: '24px',
  },
};

const SiteDialog = props => {
  const { container } = props.classes;

  return (
    <div className={container}>
      <Typography type="headline">My Portfolio Site</Typography>
      <br />
      <Typography type="body1">
        {
          'I really enjoy working in React, so much so that it really is my first choice with frameworks.  So when deciding what to build my portfolio with, React made a ton of sense, as react based UI kits are generally easier to work with than HTML api kits like Bootstrap (at least in my opinion, overruling styling and reusing complex components is much easier with React), but there were some concerns.'
        }
      </Typography>
      <br />
      <Typography type="body1">
        {
          'The biggest concern going in is that React applications aren\'t small, and can take some time to load.  Luckily we can mitigate this greatly with Server-Side Rendering, which takes the initial state of our React application and sends it as a static HTML page (styles included) that can be loaded first while the rest of the application loads in the background.  This actually makes the application load slower, but is perceived to be quicker because the user sees the initial content almost immediately.  With user interfaces, perceived performance usually trumps raw numbers, so I went with that.  This was another use of Next.Js (quickly becoming my go-to React "boilerplate") and it integrates well with other existing projects.'
        }
      </Typography>
      <br />
      <Typography type="headline">{'Libraries and Frameworks Used'}</Typography>
      <Typography type="subheading">
        <a href="http://expressjs.com/">Express</a>
        <br />
        <a href="https://facebook.github.io/react/"> React</a>
        <br />
        <a href="https://github.com/zeit/next.js/">Next.js</a>
        <br />
        <a href="http://www.material-ui.com/#/">Material-UI</a>
        <br />
      </Typography>
    </div>
  );
};

SiteDialog.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(SiteDialog);

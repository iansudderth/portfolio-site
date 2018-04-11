import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styleSheet = {
  container: {
    padding: '24px',
  },
};

const RecipeDialog = props => {
  const { container } = props.classes;

  return (
    <div className={container}>
      <Typography type="headline">Recursive To-do List</Typography>
      <br />
      <Typography type="body1">
        I love to cook and I love science, so when I finally got my hands on
        <em>The Modernist Cuisine</em>, I was instantly inspired. One part I
        particularly enjoyed was the way recipes were written. Instead of having
        on large block of ingredients, and another block of instructions,
        recipes were broken down by section, such that only ingredients and
        procedures that were needed for a section were shown, making recipes
        much easier to understand.
      </Typography>
      <br />
      <Typography type="body1">
        The other innovation was using percentages to allow for scaling of
        ingredients by weight, making it easy to convert recipes to use any
        amount of ingredients in proportion. This gave the recipes their
        nickname of <em>Parametric Recipes</em> and was a large inspiration for
        this app.
      </Typography>
      <br />
      <Typography type="body1">
        Rather than simply creating an app for storing and formatting recipes, I
        thought it would be useful to make one where any number could be edited
        to scale the ingredients in the recipe. Thus my
        <em>Parametric Recipes</em> project was born.
      </Typography>
      <br />
      <Typography type="headline">
        {'Development Process and Challenges'}
      </Typography>
      <br />
      <Typography type="body1">
        {
          'Originally, this app was prototyped with jQuery and Bootstrap, well before I had learned any Node or React.  I was initially able to create a nice interface but lacked the ability to form any sort of persistance or database for the recipes, so I started my journey learning Node and Express.  After completing some courses, working on other projects, and a long detour learning React, I returned to working on this project, deciding to re-implement everything in React to take advantage of the "update as you type" interactions React is famous for.'
        }
      </Typography>
      <br />
      <Typography type="body1">
        {
          'While initial implementation went well, and Redux integration was smooth, creating an easy and predictable way to change scaling factors across different components, one big problem arose.  In my original prototype, I had used "contenteditable" html elements to create spaces where users could type in values.  React, as I soon found out, did not play nicely with these and so another solution would be needed.  The search for a valid solution went on far longer than I expected, and ended with forking a package to manually fix issues, but at the end of it, I was left with custom styled input and textarea elements that would automatically resize when edited.  Once this solution had been implemented, the rest of the front-end was fairly straight-forward.'
        }
      </Typography>
      <br />
      <Typography type="body1">
        {
          'The back-end became quite a bit more involved once I started building an editing system.  I wanted users to be able to write new recipes and edit the ones they had created.  This involved implementing an authentication system that could play nice with React and interfacing with MongoDB.  Later it would mean creating a pagination system for viewing recipes.  All told, the edit system alone was almost 60 commits, and increased both the routes and the Redux actions by an order of magnitude, but was almost seamless on the user-end.'
        }
      </Typography>
      <br />
      <Typography type="headline">{'Libraries and Frameworks Used'}</Typography>
      <Typography type="subheading">
        <a href="http://expressjs.com/">Express</a>
        <br />
        <a href="http://mongoosejs.com/">Mongoose</a>
        <br />
        <a href="https://facebook.github.io/react/"> React</a>
        <br />
        <a href="https://github.com/zeit/next.js/">Next.js</a>
        <br />
        <a href="http://redux.js.org/">Redux</a>
        <br />
        <a href="https://github.com/gaearon/redux-thunk">Redux-Thunk</a>
        <br />
        <a href="http://www.material-ui.com/#/">Material-UI</a>
        <br />
        <a href="https://github.com/kelektiv/node.bcrypt.js">bcrypt</a>
        <br />
        <a href="https://github.com/buildo/react-autosize-textarea">
          React Autosize Textarea
        </a>
        <br />
        <a href="https://github.com/google-fabric/velocity-react">
          Velocity React
        </a>
        <br />
        <a href="https://lodash.com/">Lodash</a>
      </Typography>
    </div>
  );
};

RecipeDialog.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(RecipeDialog);

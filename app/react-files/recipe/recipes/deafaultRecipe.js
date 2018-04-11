import _ from 'lodash';

const recipe = {
  title: 'New Recipe',
  serving: { amount: 1, unit: 'serving' },
  recipe: [
    {
      ingredients: [
        { name: 'Water', amount: 32, unit: 'oz', key: _.random(0, 65536) },
        { name: 'Salt', amount: 0, unit: 'a pinch', key: _.random(0, 65536) },
        { name: 'Pepper', amount: 12, unit: 'grinds', key: _.random(0, 65536) },
      ],
      procedure: [
        {
          content:
            'Any text or number in the steps or ingredients can be edited',
          key: _.random(0, 65536),
        },
        { content: 'Including units!', key: _.random(0, 65536) },
        {
          content:
            "If you don't want an ingredient's amount to display, set it to zero and when it is displayed, only the unit will show",
          key: _.random(0, 65536),
        },
        {
          content:
            'You can use this to display "to taste" with no amount, for example',
          key: _.random(0, 65536),
        },
      ],
    },
  ],
};

export default recipe;

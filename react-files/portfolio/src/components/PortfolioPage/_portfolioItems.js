import TodoDialog from './PortfolioItemDialogs/TodoDialog';
import SiteDialog from './PortfolioItemDialogs/SiteDialog';

const portfolioItems = [
  {
    id: 'todo',
    title: 'Recursive To-do List',
    description:
      "A twist on the classic to-do-list project, where every item in the list is it's own to-do list.",
    image: '/static/todo-screenshot.jpg',
    dialog: TodoDialog,
    link: '/todo/new',
    github:
      'https://github.com/iansudderth/portfolio-site/tree/master/react-files/todo-list/src',
  },
  {
    id: 'site',
    title: 'This Site',
    description: 'A small Server-Side-Rendered React app as a Portfolio Site.',
    github: 'https://github.com/iansudderth/portfolio-site',
    image: '/static/portfolio-screenshot.jpg',
    dialog: SiteDialog,
  },
  {
    id: 'recipe',
    title: 'Parametric Recipes prototype',
    description:
      'Interactive parametric recipes inspired by The Modernist Cuisine. Early prototype of a future project.',
    image: '/static/recipe-screenshot.jpg',
    link: 'https://codepen.io/isudderth/pen/QKmazm',
  },
  {
    id: 'gradient-builder',
    title: 'CSS Gradient Builder',
    description:
      'A small Codepen project for making gradient creation interactive.',
    image: '/static/gradient-screenshot.jpg',
    link: 'https://codepen.io/isudderth/pen/woqdaP',
  },
  {
    id: 'quote',
    title: 'Random Quote Generator',
    description:
      'A project for FreeCodeCamp, making a machine that spits out random quotes.',
    link: 'https://codepen.io/isudderth/pen/QKpdZE',
    image: '/static/quote-screenshot.jpg',
  },
];

export default portfolioItems;

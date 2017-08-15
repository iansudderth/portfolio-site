import TestDialog from "./PortfolioItemDialogs/test.js";
import TodoDialog from "./PortfolioItemDialogs/TodoDialog.js";
import SiteDialog from "./PortfolioItemDialogs/SiteDialog.js";

const portfolioItems = [
	{
		id: "todo",
		title: "Recursive Todo List",
		description:
			"A twist on the classic todo-list project, where every item in the list is it's own todo list.",
		image: "/static/todo-screenshot.jpg",
		dialog: TodoDialog,
		link: "/todo/new",
		github:
			"https://github.com/iansudderth/portfolio-site/tree/master/react-files/todo-list/src"
	},
	{
		id: "site",
		title: "This Site",
		description:
			"A small Server-Side-Rendered React app as a Portfolio Site.",
		github: "https://github.com/iansudderth/portfolio-site",
		image: "/static/portfolio-screenshot.jpg",
		dialog: SiteDialog
	}
];

export default portfolioItems;

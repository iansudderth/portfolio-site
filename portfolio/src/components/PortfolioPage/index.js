import React from "react";
import PortfolioItem from "./PortfolioItem.js";
import _portfolioItems from "./_portfolioItems.js";

const PortfolioPage = props => {
	return (
		<div>
			<h1>
				{"I'm The Portfolio Page"}
			</h1>
			<div>
				{_portfolioItems.map(item =>
					<PortfolioItem key={item.title} item={item} />
				)}
			</div>
		</div>
	);
};

export default PortfolioPage;

import React from "react";
import PortfolioItem from "./PortfolioItem.js";
import _portfolioItems from "./_portfolioItems.js";
import Grid from "material-ui/Grid";

const PortfolioPage = props => {
	return (
		<div>
			<h1>
				{"I'm The Portfolio Page"}
			</h1>
			<Grid container spacing={24} justify={"center"}>
				{_portfolioItems.map(item =>
					<PortfolioItem key={item.id} item={item} />
				)}
			</Grid>
		</div>
	);
};

export default PortfolioPage;

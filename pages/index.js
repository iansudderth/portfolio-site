import React, { Component } from "react";
import withRoot from "../style/withRoot";
import Portfolio from "../react-files/portfolio/src/index.js";

class Index extends Component {
	render() {
		return <Portfolio />;
	}
}

export default withRoot(Index);

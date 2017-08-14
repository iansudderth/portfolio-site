import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "material-ui/IconButton";
import CheckIcon from "material-ui-icons/Check";
import ReportIcon from "material-ui-icons/Report";
import MDSpinner from "react-md-spinner";

const NetworkProgress = props => {
	let icon = "";
	switch (props.network) {
		case "progress":
			icon = <MDSpinner singleColor={props.textColor} />;
			break;
		case "success":
			icon = <CheckIcon />;
			break;
		case "error":
			icon = <ReportIcon />;
			break;
	}
	return (
		<span>
			<IconButton
				style={{ color: props.textColor }}
				onClick={props.updateData}
			>
				{icon}
			</IconButton>
		</span>
	);
};

NetworkProgress.propTypes = {
	network: PropTypes.string,
	textColor: PropTypes.string,
	updateData: PropTypes.func
};

function mapStateToProps({ network }) {
	return { network };
}

export default connect(mapStateToProps)(NetworkProgress);

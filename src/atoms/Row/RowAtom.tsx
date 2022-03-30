import React from "react";
import './styles.css';

interface Props {
	type: string,
}

export class RowAtom extends React.Component<Props> {
	render() {
		let classes = "row";

		classes += " row__" + this.props.type;

		return <div className={classes}>
			{this.props.children}
		</div>;
	}
}
import React from "react";
import './styles.css';

interface Props {
	type: string,
}

export class ColumnAtom extends React.Component<Props> {
	render() {
		let classes = "column " + "column__" + this.props.type;

		return <div className={classes}>
			{this.props.children}
		</div>
	}
}
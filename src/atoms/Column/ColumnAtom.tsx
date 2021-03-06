import React from "react";
import './styles.css';

interface Props {
	classes?: string,
}

export class ColumnAtom extends React.Component<Props> {
	render() {
		let class_array;

		if (this.props.classes) {
			class_array = this.props.classes.split(" ").map((item) => {
				return "column__" + item;
			});
		}

		return <div className={"column " + class_array?.join(" ")}>
			{this.props.children}
		</div>
	}
}
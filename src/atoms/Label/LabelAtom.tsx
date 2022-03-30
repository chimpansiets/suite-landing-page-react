import React from "react";

interface Props {
	classes?: string,
}

export class LabelAtom extends React.Component<Props> {
	render() {
		let class_array;

		if (this.props.classes) {
			class_array = this.props.classes.split(" ").map((item) => {
				console.log(item);
				return "label__" + item;
			});
		}

		return <div className={"label " + class_array?.join(" ")}>

		</div>
	}
}
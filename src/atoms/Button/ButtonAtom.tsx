import React from "react";
import './styles.css';

interface Props {
	onClick?: () => {},
	classes: string,
}

export class ButtonAtom extends React.Component<Props> {
	render() {
		let class_array;

		if (this.props.classes) {
			class_array = this.props.classes.split(" ").map((item) => {
				console.log(item);
				return "btn__" + item;
			});
		}

		return <button 
			className={"btn " + class_array?.join(" ")}
			onClick={this.props.onClick}>
			{this.props.children}
		</button>
	}
}
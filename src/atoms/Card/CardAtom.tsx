import React from "react";
import './styles.css';

interface Props {
	classes?: string,
}

export class CardAtom extends React.Component<Props> {
	render() {
		let class_array;

		if (this.props.classes) {
			class_array = this.props.classes.split(" ").map((item) => {
				return "card__" + item;
			});
		}

		return <div className={"card " + class_array?.join(" ")}>
			{this.props.children}
		</div>
	}

}
import React from "react";
import './styles.css';

interface Props {
	src: string,
	alt: string,
	classes?: string,
}

export class ImageAtom extends React.Component<Props> {
	render() {
		let class_array;

		if (this.props.classes) {
			class_array = this.props.classes.split(" ").map((item) => {
				return "image__" + item;
			});
		}

		return <img className={"image " + class_array?.join(" ")} src={this.props.src} alt={this.props.alt} />
	}
}
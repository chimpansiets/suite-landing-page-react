import React from "react";
import { ImageAtom } from "../../atoms/Image/ImageAtom";
import { RowAtom } from "../../atoms/Row/RowAtom";
import { CallToActionMolecule } from "../../molecules/CallToAction/CallToActionMolecule";

interface Props {

}

export class LandingContentOrganism extends React.Component<Props> {
	render() {
		let picture_webp = require("../../assets/image-hero-portrait.webp");

		return <RowAtom type="landing">
			<CallToActionMolecule></CallToActionMolecule>
			<ImageAtom classes="hero" src={picture_webp} alt="hero portrait" />
		</RowAtom>;
	}
}
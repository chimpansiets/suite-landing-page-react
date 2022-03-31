import React from "react";
import { ImageAtom } from "../../atoms/Image/ImageAtom";
import { RowAtom } from "../../atoms/Row/RowAtom";
import { CallToActionMolecule } from "../../molecules/CallToAction/CallToActionMolecule";
import { StatisticMolecule } from "../../molecules/Statistics/StatisticMolecule";

import top_line from "../../assets/pattern-curved-line-1.svg";

interface Props {

}

export class LandingContentOrganism extends React.Component<Props> {
	render() {
		let picture_webp = require("../../assets/image-hero-portrait.webp");

		return <RowAtom classes="landing">
			<RowAtom classes="call_to_action">
				<CallToActionMolecule />
				<ImageAtom src={top_line} alt="top curved line" classes="curved_line_top"></ImageAtom>
				<ImageAtom classes="hero" src={picture_webp} alt="hero portrait" />
			</RowAtom>
			<StatisticMolecule></StatisticMolecule>
		</RowAtom>;
	}
}
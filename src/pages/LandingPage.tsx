import React from "react";
import { FooterMolecule } from "../molecules/Footer/FooterMolecule";
import { HeaderMolecule } from "../molecules/Header/HeaderMolecule";
import { LandingContentOrganism } from "../organisms/LandingContent/LandingContentOrganism";
import { ReviewOrganism } from "../organisms/Review/ReviewOrganism";

export class LandingPage extends React.Component {
	render() {
		return <>
			<HeaderMolecule />
			<LandingContentOrganism />
			<ReviewOrganism />
			<FooterMolecule />
		</>;
	}
}

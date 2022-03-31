import React from "react";
import { FooterMolecule } from "../molecules/Footer/FooterMolecule";
import { HeaderMolecule } from "../molecules/Header/HeaderMolecule";
import { LandingContentOrganism } from "../organisms/LandingContent/LandingContentOrganism";
import { ReviewOrganism } from "../organisms/Review/ReviewOrganism";

export class LandingPage extends React.Component {
	render() {
		return <>
			<HeaderMolecule />
			<div style={{height: 50}}></div>
			<LandingContentOrganism />
			<div style={{height: 100}}></div>
			<ReviewOrganism />
			<FooterMolecule />
		</>;
	}
}

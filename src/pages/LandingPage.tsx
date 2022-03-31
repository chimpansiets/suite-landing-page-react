import React from "react";
import { FooterMolecule } from "../molecules/Footer/FooterMolecule";
import { HeaderMolecule } from "../molecules/Header/HeaderMolecule";
import { LandingContentOrganism } from "../organisms/LandingContent/LandingContentOrganism";
import { ReviewOrganism } from "../organisms/Review/ReviewOrganism";
import { RowAtom } from "../atoms/Row/RowAtom";

export class LandingPage extends React.Component {
	render() {
		return <>
			<RowAtom classes="align_margin">
				<HeaderMolecule />
			</RowAtom>
			<div style={{height: 50}}></div>
			<RowAtom classes="align_margin">
				<LandingContentOrganism />
			</RowAtom>
			<div style={{height: 100}}></div>
			<RowAtom classes="align_margin">
				<ReviewOrganism />
			</RowAtom>
			<div style={{height: 50}}></div>
			<RowAtom classes="align_margin">
				<FooterMolecule />
			</RowAtom>
		</>;
	}
}

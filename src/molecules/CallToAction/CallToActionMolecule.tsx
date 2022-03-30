import React from "react";
import { ButtonAtom } from "../../atoms/Button/ButtonAtom";
import { ColumnAtom } from "../../atoms/Column/ColumnAtom";

export class CallToActionMolecule extends React.Component {
	render() {
		return <ColumnAtom type="call_to_action">
			<h1>A super solution for your business</h1>
			<p>Our marketing and sales automations<br />
				help you scale your outreach to get<br />
				more leads for your company. </p>
			<ButtonAtom classes="primary cta">Request Beta Access</ButtonAtom>
		</ColumnAtom>;
	}
}

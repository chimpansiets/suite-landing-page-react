import React from "react";
import { ButtonAtom } from "../../atoms/Button/ButtonAtom";
import { ColumnAtom } from "../../atoms/Column/ColumnAtom";
import { LabelAtom } from "../../atoms/Label/LabelAtom";

export class CallToActionMolecule extends React.Component {
	render() {
		return <ColumnAtom classes="call_to_action">
			<LabelAtom classes="heading_xl dark">
				A <b>super solution</b><br />
				for your <b>business</b>
			</LabelAtom>
			<LabelAtom classes="body grey">
				Our marketing and sales automations<br />
				help you scale your outreach to get<br />
				more leads for your company.
			</LabelAtom>
			<ButtonAtom classes="primary cta">Request Beta Access</ButtonAtom>
		</ColumnAtom>;
	}
}

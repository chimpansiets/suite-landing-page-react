import React from "react";
import { ColumnAtom } from "../../atoms/Column/ColumnAtom";
import { LabelAtom } from "../../atoms/Label/LabelAtom";

export class StatisticMolecule extends React.Component {
	render() {
		return <ColumnAtom classes="statistics">
			<ColumnAtom classes="single_stat">
				<LabelAtom classes="heading_l dark" >2K+</LabelAtom>
				<LabelAtom classes="heading_s grey">COMPANIES</LabelAtom>
			</ColumnAtom>
			<ColumnAtom classes="single_stat">
				<LabelAtom classes="heading_l dark" >8</LabelAtom>
				<LabelAtom classes="heading_s grey">LANGUAGES</LabelAtom>
			</ColumnAtom>
			<ColumnAtom classes="single_stat">
				<LabelAtom classes="heading_l dark" >1.2M</LabelAtom>
				<LabelAtom classes="heading_s grey">LEADS</LabelAtom>
			</ColumnAtom>
		</ColumnAtom>
	}
}

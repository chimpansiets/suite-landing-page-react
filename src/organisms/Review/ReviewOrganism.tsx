import React from "react";
import { CardAtom } from "../../atoms/Card/CardAtom";
import { ImageAtom } from "../../atoms/Image/ImageAtom";
import { RowAtom } from "../../atoms/Row/RowAtom";

import blur_img from "../../assets/pattern-blur.svg";
import { ColumnAtom } from "../../atoms/Column/ColumnAtom";
import { LabelAtom } from "../../atoms/Label/LabelAtom";

interface Props {}

export class ReviewOrganism extends React.Component {
	render() {
		let jeremy_img = require("../../assets/image-jeremy-large.webp");

		return <RowAtom classes="review">
			<CardAtom classes="review primary">
				<ImageAtom classes="jeremy_blur" src={blur_img} alt="blur"/>
				<ImageAtom classes="jeremy" src={jeremy_img} alt="jeremy" />
				<ColumnAtom classes="review">
					<LabelAtom classes="heading_l light">It just works.</LabelAtom>
					<LabelAtom classes="quote light">
						“I really like how it is an all-in-one<br />
						solution that handle many of the<br />
						tasks that you would normally need<br />
						separate tools to do the same job.<br />
						This thing is a miracle worker.”
					</LabelAtom>
					<LabelAtom classes="heading_m light">JEREMY ROBINSON</LabelAtom>
					<LabelAtom classes="heading_s light">CMO, FYLO</LabelAtom>
				</ColumnAtom>
			</CardAtom>
		</RowAtom>
	}
}
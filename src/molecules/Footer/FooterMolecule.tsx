import React from "react";
import { RowAtom } from "../../atoms/Row/RowAtom";
import { ImageAtom } from "../../atoms/Image/ImageAtom";
import { LabelAtom } from "../../atoms/Label/LabelAtom";

import logo from "../../assets/logo.svg";
import icon_facebook from "../../assets/icon-facebook.svg";
import icon_instagram from "../../assets/icon-instagram.svg";
import icon_twitter from "../../assets/icon-twitter.svg";

export class FooterMolecule extends React.Component {
	render() {
		return <RowAtom classes="footer">
			<ImageAtom src={logo} alt="suite logo"/>
			<LabelAtom classes="footer grey">Copyright - Suite</LabelAtom>
			<RowAtom classes="socials">
				<ImageAtom src={icon_facebook} alt="icon facebook" classes="icon"/>
				<ImageAtom src={icon_instagram} alt="icon instagram" classes="icon"/>
				<ImageAtom src={icon_twitter} alt="icon twitter" classes="icon"/>
			</RowAtom>
		</RowAtom>
	}
}
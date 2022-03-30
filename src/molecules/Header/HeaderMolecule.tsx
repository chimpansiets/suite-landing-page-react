import React from "react";
import { ImageAtom } from "../../atoms/Image/ImageAtom";
import { RowAtom } from "../../atoms/Row/RowAtom";

import logo from "../../assets/logo.svg";
import { ButtonAtom } from "../../atoms/Button/ButtonAtom";

export class HeaderMolecule extends React.Component {
	render() {
		return <RowAtom type="header">
			<ImageAtom src={logo} alt="logo" />
			<ButtonAtom classes="secondary">
				Request Beta Access
			</ButtonAtom>
		</RowAtom>
	}
}
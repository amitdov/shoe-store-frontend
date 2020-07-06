import React, { Component } from 'react';
import { Card, Image } from "semantic-ui-react";
class ShoesCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: this.props.index,
			item: this.props.item,
			color: this.props.color
		};
	}
	render() {
		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: this.state.item.price.currency,
			minimumFractionDigits: 0
		})
		return (
			<Card
				color={this.state.color}
				image={this.state.item.pictureLink}
				header={formatter.format(this.state.item.price.value)}
				description={this.state.item.name}
			/>
		);
	}
}

export default ShoesCard;
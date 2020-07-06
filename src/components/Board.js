import React, { Component } from 'react';
import { Card, Loader, Dimmer, Segment, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import ShoesCard from './ShoesCard';
import _, { fromPairs } from "lodash";
class Board extends React.Component {

	render() {
		if (this.props.searchResults.isInSearch) {
			return (
				<Loader active >Loading results...</Loader>
			);
		} else if (this.props.searchResults.noResults) {
			return (
				<div style={{ textAlign: "center" }}>
					Coulden't find any results that matches the search :(
					{/* <Icon name='frown outline' /> */}
				</div>
			)

		} else {
			return (
				<Card.Group centered stackable>
					{this.renderCards()}
				</Card.Group>
			);
		}

	}
	renderCards() {

		if (!_.isEmpty(this.props.searchResults)) {
			console.log(this.props.searchResults);
			return this.props.searchResults.map(
				(
					item,
					index
				) => {
					return this.renderCard(index, item, cardColors[index % cardColors.length]);
				});
		}
	}

	renderCard(index, item, color) {
		return <ShoesCard
			index={index}
			item={item}
			color={color}
		/>;
	}
}
const cardColors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey'];
const mapStateToProps = ({ searchResults }) => {
	return { searchResults };
};

export default
	connect(mapStateToProps)
		(Board);

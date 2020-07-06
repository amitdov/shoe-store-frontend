import React, { Component } from 'react';
import { Card, Loader, Dimmer, Segment, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import ShoesCard from './ShoesCard';

import { getNextPage } from "../actions/index";
import _ from "lodash";
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
				<div>
					<Card.Group centered stackable>
						{this.renderCards()}
					</Card.Group>
					{!_.isEmpty(this.props.searchResults.nextPage) &&
						<Button onClick={() =>
							this.props.getNextPage()
						} > Next </Button>
					}
				</div>

			);
		}

	}

	renderCards() {

		if (!_.isEmpty(this.props.searchResults.shoesList)) {
			return this.props.searchResults.shoesList.map(
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
	connect(mapStateToProps, { getNextPage })
		(Board);

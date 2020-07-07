import React, { Component } from 'react';
import { Card, Loader, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import ShoesCard from './ShoesCard';

import { getNextPage } from "../actions/index";
import _ from "lodash";
const cardColors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey'];

class Board extends Component {

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

	render() {
		if (this.props.searchResults.isInSearch) {
			return (
				<Loader active >Loading results...</Loader>
			);
		} else if (this.props.searchResults.noResults) {
			return (
				<div style={{ textAlign: "center" }}>
					Coulden't find any results that matches the search :(
				</div>
			)

		} else {
			return (
				<div>
					<Card.Group centered stackable>
						{this.renderCards()}
					</Card.Group>
					{!_.isEmpty(this.props.searchResults.nextPage) &&
						<div style={{
							textAlign: "center",
							margin: 10
						}}>
							<Button onClick={() =>
								this.props.getNextPage()

							} > Next
							<Icon name="arrow right" />
							</Button>
						</div>
					}
				</div>

			);
		}

	}
}
const mapStateToProps = ({ searchResults }) => {
	return { searchResults };
};

export default
	connect(mapStateToProps, { getNextPage })
		(Board);

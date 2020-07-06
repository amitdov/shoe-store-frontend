// External modules
import React, { Component } from "react";
import ComplexSearch from "./ComplexSearch";
import SearchComponent from "./Search";
import Board from "./Board";
import _ from "lodash";
import { connect } from "react-redux";
class HomeView extends Component {

  RenderAdvencedSearch() {
    if (!_.isEmpty(this.props.advencedMode) &&
      this.props.advencedMode.isAdvenced) {
      return <ComplexSearch></ComplexSearch>;
    }
  }

  render() {
    return (
      <div>
        <SearchComponent></SearchComponent>
        {this.RenderAdvencedSearch()}
        <div>
          <Board></Board>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ advencedMode }) => {
  return { advencedMode };
};

export default
  connect(mapStateToProps)
    (HomeView);

// External modules
import React, { Component } from "react";
import SearchComponent from "./Search";
import Board from "./Board";
import _ from "lodash";
import { connect } from "react-redux";
class HomeView extends Component {

  render() {
    return (
      <div>
        <SearchComponent></SearchComponent>
        <div>
          <Board></Board>
        </div>
      </div>
    );
  }

}

export default HomeView;

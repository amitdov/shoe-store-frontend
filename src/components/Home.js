// External modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar, Menu } from "semantic-ui-react";
import SearchComponent from "./Search";
import Board from "./Board";
import _ from "lodash";
class HomeView extends Component {
  state = { activeSystem: undefined };



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

// const mapStateToProps = ({ }) => {
//   return {

//   };
// };

export default
  // connect(mapStateToProps, {

  // })
  (HomeView);

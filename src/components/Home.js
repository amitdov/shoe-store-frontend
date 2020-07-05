// External modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar, Menu } from "semantic-ui-react";
import SearchComponent from "./Search";
// import { fetchAllUsers } from "../actions";
import _ from "lodash";
class HomeView extends Component {
  state = { activeSystem: undefined };



  render() {
    return (
      <SearchComponent></SearchComponent>
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

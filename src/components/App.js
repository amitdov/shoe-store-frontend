// External modules
import React, { Component } from "react";
import { connect } from "react-redux";

// Inner modules
import "../styles/app.css";
import HomeView from "./Home";
import NavBar from "./NavBar";
import CopyrightFooter from "./CopyrightFooter";

class App extends Component {

  renderContent = () => {
    return <HomeView />;
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.renderContent()}
        <CopyrightFooter />
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
  (App);

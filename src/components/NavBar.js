import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/navbar-style.css";
import { Segment, Menu, Icon } from "semantic-ui-react";

class NavBar extends Component {

  render() {
    return (
      <div>
        <Segment inverted style={{ borderRadius: "0", margin: "0" }}>
          <Menu inverted secondary>
            <Menu.Menu position="left">
              <Menu.Item>
                <Icon name="shop" size="large" />
                Amit's shoe store
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}

// const mapStateToProps = ({ }) => {
//   return {};
// };

export default
  // connect(mapStateToProps, {

  // })
  (NavBar);

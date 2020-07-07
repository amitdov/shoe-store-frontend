import _ from "lodash";
import React, { Component } from "react";
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

export default NavBar;

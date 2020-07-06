import React, { Component } from "react";
import "../styles/copyright-footer.css";

import { Segment } from "semantic-ui-react";

class CopyrightFooter extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 70 }} />
        <footer style={{ zIndex: 1000, position: "fixed", left: 0, bottom: 0, right: 0 }}>
          <Segment className="copyright-footer-segment" secondary>
            <div className="footer-content">
              © This application is created by Amit Dov
          </div>
          </Segment>
        </footer>
      </div>
    );
  }
}

export default CopyrightFooter;

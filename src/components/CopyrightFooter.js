import React, { Component } from "react";
import "../styles/copyright-footer.css";

import { Segment } from "semantic-ui-react";

class CopyrightFooter extends Component {
  render() {
    return (
      <footer style={{ position: "fixed", left: 0, bottom: 0, right: 0 }}>
        <Segment className="copyright-footer-segment" secondary>
          <div className="footer-content">
            © This application is created by Amit Dov
          </div>
        </Segment>
      </footer>
    );
  }
}

export default CopyrightFooter;

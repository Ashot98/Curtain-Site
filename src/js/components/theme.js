import React, { Component } from 'react';

class Theme extends Component {
  render() {
    return (
      <div className="theme">
        <div className="wrapper">
          <div className="theme_content">
            <div className="card">
              <div className="card_content">
                <span id="name">Jakkard</span>
                <hr />
                <span>Салон штор</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Theme;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {SectionsContainer, Section} from 'react-fullpage';

let options = {
  anchors: ['intro', 'greetings', 'location', 'gallery', 'contact'],
  scrollBar: true,
  verticalAlign: true,
  delay: 1000
};

import About from 'containers/About';

class Main extends Component {
  render() {
    return(
      <About/>
    );
  }
}

module.exports =  connect(null, { })(Main);

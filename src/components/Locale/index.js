import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';

import { setLocale } from 'actions/locale';

class Locale extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  }

  static store(state) {
    return {
      locale: state.locale
    };
  }

  onClick = (e) => {
    const { setLocale }  = this.props;
    setLocale(e.target.value);
  }

  render() {
    return(
      <div>
        <button className="btn" value={'ko'} onClick={this.onClick}>KO</button>
        <button className="btn" value={'en'} onClick={this.onClick}>EN</button>
      </div>
    );
  }
}

module.exports = connect(Locale.store, { setLocale })(Locale);

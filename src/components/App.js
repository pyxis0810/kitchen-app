if(!global.Intl) {
  global.Intl = require('intl');
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getLocale } from 'actions/locale';

import Header from 'components/Header';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
addLocaleData([...en, ...ko]);

import msg_en from 'locales/en';
import msg_ko from 'locales/ko';

const messages = {
  en: msg_en,
  ko: msg_ko
};

class App extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    getLocale: PropTypes.func.isRequired
  }

  static store(state) {
    return {
      locale: state.locale
    };
  }

  componentWillMount() {
    const { getLocale } = this.props;
    
    getLocale();
  }

  render() {
    const { children, locale } = this.props;

    if ( !locale || locale === '' ) { return null; }

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        <div>
          <div className="header">
            <Header />
          </div>
          <div>
            {children}
          </div>
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
}

module.exports = connect(App.store, { getLocale })(App);

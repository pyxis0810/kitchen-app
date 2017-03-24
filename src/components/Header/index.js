import './header.less';

import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Locale from 'components/Locale';

import { Col, Row } from 'antd';

import logo from '../../images/rocket-kitchen-logo-white@2x.png';

class Header extends Component {
  static propTypes = {
      authenticated: PropTypes.bool
  }

  static store(state) {
      return {
        authenticated: state.auth.authenticated
      };
  }

  renderLinks = () => {
    const { authenticated } = this.props;

    if(authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout" className="nav-link"><FormattedMessage id="app.global.signout" /></Link>
        </li>
      );
    } else {
      return ([
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link"><FormattedMessage id="app.global.signin" /></Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link"><FormattedMessage id="app.global.signup" /></Link>
        </li>
      ]);
    }
  }

  render() {
    return(
      <Row className="rocket-kitchen-nav">
        <Col><img src={logo} className="logo"/></Col>
        <Col><Link to="/" className="nav-link"><FormattedMessage id="app.nav.about" /></Link></Col>
      </Row>
    );
  }

// <nav className="">
// <ul className="navbar-nav">
// <li className="nav-item">
// <Link to="/" className="nav-link"><FormattedMessage id="app.nav.about" /></Link>
// </li>
// <li className="nav-item">
// <Link to="/intro" className="nav-link"><FormattedMessage id="app.nav.introduction" /></Link>
// </li>
// <li className="nav-item">
// <Link to="/posts" className="nav-link"><FormattedMessage id="app.nav.catering" /></Link>
// </li>
// <li className="nav-item">
// <Link to="/comments" className="nav-link"><FormattedMessage id="app.nav.location" /></Link>
// </li>
// {this.renderLinks()}
// <Locale />
// </ul>
// </nav>
}

module.exports = connect(Header.store, {})(Header);

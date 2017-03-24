import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { AUTH_USER } from 'actions';

import store from 'store';

import App from 'components/App';
import Signin from 'routes/Signin';
import Signup from 'routes/Signup';
import Signout from 'routes/Signout';
import Main from 'routes/Main';
import Intro from 'routes/Intro';
import Posts from 'routes/Posts';
import Comments from 'routes/Comments';
import Oauth from 'routes/Oauth';
import NotFound from 'routes/NotFound';

import 'antd/dist/antd.css';
import 'less/style.less';

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

const rootRoute = {
  childRoutes: [{
      path: '/',
      component: App,
      indexRoute:  { component: Main },
      childRoutes: [
        Signin,
        Signup,
        Signout,
        Intro,
        Posts,
        Comments,
        Oauth,
        NotFound
      ]
    }]
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>,
  document.getElementById('root')
);

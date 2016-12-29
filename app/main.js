/**
 * Created by yatessss on 16/11/18.
 */
'use strict';
// 库
import 'lib-flexible'
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import axios from 'axios';
import { createStore, applyMiddleware,compose } from 'redux'
import DevTools from './DevTools'
import reducer from './redux/reducer'
import { Provider } from 'react-redux'


const enhancer = compose(
    DevTools.instrument()
);

const store = createStore(reducer, enhancer, applyMiddleware(thunk))

window.axios = axios

// 组件
import Hello from './view/component.jsx';
import List from './view/list.jsx'
import SideBar from './components/sidebar.jsx'
import ListHeader from './components/list-header.jsx'

import './css/main.scss';



render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={List}>
            <IndexRoute component={Hello}/>

          </Route>
          <Route path="theme" component={Hello}/>
        </Router>
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app')
);

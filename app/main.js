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
// const store = createStore(reducer, applyMiddleware(thunk))

window.axios = axios

// 组件
import Hello from './view/component.jsx';
import List from './view/list.jsx'
import Detail from './view/detail.jsx'
import listDefault from './components/list-default.jsx'
import ListTheme from './components/list-theme.jsx'
import Editor from './view/editor.jsx'
import Author from './view/author.jsx'
import Comments from './view/comments.jsx'
import Section from './view/section.jsx'

import './css/main.scss';



render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={List}>
            <IndexRoute component={listDefault}/>
            <Route path="theme/:id" component={ListTheme} />
            <Route path="author" component={Author} />
            {/*<Route path="messages/:id" component={Message} />*/}
          </Route>
          {/*<Route path="theme" component={Hello}/>*/}
          <Route path="detail/:id" component={Detail} />
          <Route path="editor" component={Editor} />
          <Route path="comments/:id" component={Comments} />
          <Route path="section/:id" component={Section} />
        </Router>
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app')
);

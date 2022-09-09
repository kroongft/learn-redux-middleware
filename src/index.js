import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware(); //사가 미들웨어를 만듭니다.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger))); // 여러개의 미들웨어를 적용할 수 있습니다.
sagaMiddleware.run(rootSaga); // 루드 사가를 실행해줍니다.
//주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

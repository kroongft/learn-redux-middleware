import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";

const rootReducer = combineReducers({ counter });

export function* rootSaga() {
  yield all([counterSaga()]); // all은 배열안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
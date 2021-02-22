import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';

function* rootSaga() {
  yield all([fork(authSagas)]);
}

export default rootSaga;

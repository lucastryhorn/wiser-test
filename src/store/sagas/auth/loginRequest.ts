import { put, takeLatest } from 'redux-saga/effects';
import { LoginType } from '../../../commom-types';

import api from '../../../services';

import { Creators as AuthCreators, Types } from '../../reducers/auth';

function* getLoginRequest({ email, password }: LoginType) {
  try {
    const res = yield api.post('', { email, password });

    yield put(AuthCreators.getLoginSuccess(res.data));
  } catch (error) {
    yield put(AuthCreators.getLoginFailed(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_LOGIN_REQUEST, getLoginRequest);
}

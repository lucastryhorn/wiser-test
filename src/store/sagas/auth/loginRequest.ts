import { put, takeLatest } from 'redux-saga/effects';
import { LoginType } from '../../../commom-types';

import api from '../../../services';

import { Creators as AuthCreators, Types } from '../../reducers/auth';
import { Creators as GlobalCreators } from '../../reducers/global';

function* getLoginRequest({ email, password }: LoginType) {
  try {
    const res = yield api.post('', { email, password });

    yield put(AuthCreators.getLoginSuccess(res.data));
    yield put(
      GlobalCreators.setModalRequest({ open: true, message: 'Sucesso' }),
    );
  } catch (error) {
    yield put(AuthCreators.getLoginFailed(error));
    yield put(
      GlobalCreators.setModalRequest({ open: true, message: error.message }),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_LOGIN_REQUEST, getLoginRequest);
}

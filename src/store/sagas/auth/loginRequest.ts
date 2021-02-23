import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';

import api from '../../../services';

import { Creators as AuthCreators, Types } from '../../reducers/auth';
import { Creators as GlobalCreators } from '../../reducers/global';

function* getLoginRequest(action: AnyAction) {
  const { data } = action;

  try {
    const res = yield api.post('/login', data);

    yield put(AuthCreators.getLoginSuccess(res.data));
    yield put(
      GlobalCreators.setModalRequest({
        open: true,
        message: 'Sucesso',
        type: 'success',
      }),
    );
  } catch (error) {
    yield put(AuthCreators.getLoginFailed(error));
    yield put(
      GlobalCreators.setModalRequest({
        open: true,
        message: error.response?.data?.error,
        type: 'error',
      }),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_LOGIN_REQUEST, getLoginRequest);
}

import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { AnyAction } from 'redux';

import { Error, UserType, LoginType } from '../../commom-types';

type GetLoginTypes = {
  getLoginRequest(data: LoginType): AnyAction;
  getLoginSuccess(user: UserType): AnyAction;
  getLoginFailed(error: Error): AnyAction;
};

export type InitalLoginTypes = {
  user?: UserType;
  loading?: boolean;
  error?: Error;
};

export const INITIAL_STATE: ImmutableObject<InitalLoginTypes> = Immutable({
  loading: false,
  error: {},
});

const getLoginRequest = (state = INITIAL_STATE) => state.set('loading', true);

const getLoginSuccess = (state = INITIAL_STATE, { data }: AnyAction) =>
  state.merge({ user: data });

const getLoginFailed = (state = INITIAL_STATE, error: Error) =>
  state.set('error', error);

export const { Types, Creators } = createActions<AnyAction, GetLoginTypes>({
  getLoginRequest: ['data'],
  getLoginSuccess: ['data'],
  getLoginFailed: ['error'],
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_LOGIN_REQUEST]: getLoginRequest,
  [Types.GET_LOGIN_SUCCESS]: getLoginSuccess,
  [Types.GET_LOGIN_FAILED]: getLoginFailed,
});

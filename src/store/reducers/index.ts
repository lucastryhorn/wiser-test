import { combineReducers } from 'redux';

import { ImmutableObject } from 'seamless-immutable';

import auth, { InitalLoginTypes } from './auth';

export interface IReducers {
  auth: ImmutableObject<InitalLoginTypes>;
}

const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

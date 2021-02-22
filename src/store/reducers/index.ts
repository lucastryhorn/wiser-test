import { combineReducers } from 'redux';

import { ImmutableObject } from 'seamless-immutable';

import auth, { InitalLoginTypes } from './auth';
import global, { InitalGlobalTypes } from './global';

export interface IReducers {
  auth: ImmutableObject<InitalLoginTypes>;
  global: ImmutableObject<InitalGlobalTypes>;
}

const rootReducer = combineReducers({
  auth,
  global,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

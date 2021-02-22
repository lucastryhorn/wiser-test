import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'seamless-immutable';

import reducers, { RootState } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState> = createStore(
  reducers,
  Immutable({}),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;

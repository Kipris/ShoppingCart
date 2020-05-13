import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import orderInfoReducer from './reducers/reducer';
import { watchOrder } from './sagas/index';

const rootReducer = combineReducers({
    orderInfo: orderInfoReducer
});
  
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchOrder);

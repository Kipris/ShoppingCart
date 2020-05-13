import { takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/actionTypes';
import { makeOrderSaga } from './order';

export function* watchOrder() {
    yield takeEvery(actions.MAKE_ORDER, makeOrderSaga);
}

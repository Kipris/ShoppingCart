import { put } from 'redux-saga/effects';

import axios from '../../axios-instance';
import * as actions from '../actions/index';

export function* makeOrderSaga(action) {
    yield put(actions.makeOrderStart());
    try {
        const response = yield axios.post('/orders.json', action.order);
        yield put(actions.makeOrderSuccess());
    } catch(error) {
        yield put(actions.makeOrderFail(error));
    }
}

import { takeEvery, select, call, put } from 'redux-saga/effects';
// 1. Swap currency
// 2. Change base currency
// 3. Upon initial app load

import {SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies';

export const getLatestRate = currency => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}asdsdfsd`);

const fetchLatestConversionRates = function* (action) {
  try {
    let { currency } = action;
    if (currency == undefined) {
      currency = yield select(state => state.currencies.baseCurrency)
    }
    // call returns a an object that is easier to test
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    // end of redux saga chain
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }
};
const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}

export default rootSaga;
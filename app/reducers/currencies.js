// import action types to identify what reducer functions we should actually run
import {
  CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

// takes in inital state , as each action is called and it will modify the state and once it is done it will have most recent state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state, // copy everything in the state already into this new object - creating new not altering
        amount: action.amount || 0, // get the amount if there isn't one set it to zero
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};

export default reducer;

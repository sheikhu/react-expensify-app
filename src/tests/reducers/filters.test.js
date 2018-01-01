import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const initState = {
  type: '@@INIT'
};

test('should setup default filter values', () => {

  const state = filtersReducer(undefined, initState);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };

  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
  const text = 'rent';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: text });
  expect(state.text).toEqual(text);
});
test('should set startDate filter', () => {
  const date = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: date });
  expect(state.startDate).toEqual(date);
});

test('should set endDate filter', () => {
  const date = moment();

  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date });
  expect(state.endDate).toEqual(date);
});
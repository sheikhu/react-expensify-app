import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const defaultState = { count: 0 };

// Reducers
const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

  return state;
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});


const resetCount = () => ({
  type: 'RESET'
});


store.dispatch(incrementCount(5));

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(setCount({ count: 12 }));
store.dispatch(resetCount());






ReactDOM.render('<p>Redux</p>', document.querySelector('#app'));
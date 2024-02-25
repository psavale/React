import React, { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'check_lucky_num') {
    return {
        luckyNumber: action.nextLuckyNo//Math.floor(state.luckyNumber * Math.random()*10)
    };
  }
  throw Error('Unknown action.');
}

export default function CheckLuckyNumber() {
  const [state, dispatch] = useReducer(reducer, { luckyNumber: 5 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'check_lucky_num', nextLuckyNo: state.luckyNumber*2 })
      }}>
        Check your lucky number
      </button>
      <p>Hello! check your next lucky number {state.luckyNumber}</p>
    </>
  );
}
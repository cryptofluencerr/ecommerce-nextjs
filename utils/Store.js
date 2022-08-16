import React from "react";
// useReducer is used for stateManagement
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = { darkMode: false };

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export default Store;

// import React, {useReducer } from ' react' import " /reducers.css;
// const initialState = 0;

// const reducer = (state, action)=()=>{
// console. log(state, action);

// if (action.type ===" INCREMENT" ) {
// return state + 1;}
// if (action.type === "DECREMENT" ) {
// return state - 1;}
// return state;}

// const UseReducer = () =>
// {
// const [state, dispatch] = useReducer (reducer, initialstate);
// return (
// <div>
// <p>{state}</p>
// <div >
// <button onclick-{() => dispatch({type:
// "INCREMENT" })}> Inc </button>
// <button onClick={()=> dispatch( {type:
// "DECREMENT"})}> Dec </button>
// </div>
// </div>}

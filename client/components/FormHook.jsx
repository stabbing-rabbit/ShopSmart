import React, { useReducer } from 'react'
import wfLogo from '../assets/wholeFoods.png'
import traderJoeLogo from '../assets/traders.png'
import ralphsLogo from '../assets/ralphs.png'

import LogosHook from './form-components/Logos';

// create an initial state
const initialState = {
  wholeFoodsSelected: false,
  traderJoesSelected: false,
  ralphsSelected: false,
  foodsList: [],
  wholeFoodsList: [],
  traderJoesList: [],
  ralphsList: [],
  wholeFoodsSubtotal: 0,
  traderJoesSubtotal: 0,
  ralphsSubtotal: 0,
  food: '',
  maxBudget: 0,
}

// a way to update state based on the action type that is passed in
// state is resolved to the initial state of app
// action is the object that was passed into the dispatch
const updateState = (state, action) => {
  switch (action.type) {
      case 'REVEAL_STORE': {
        return {
          ...state,
          [action.payload] : !state[action.payload],
        }
      }
    default: {
        return state;
      }
  }
}

export default function FormHook() {
  // very similar to redux:
  // state is the initial state of the app
  // dispatch is the a way of updating the state
  // dispatch accepts an object with properties of payload and type then passed onto updateState
  const [state, dispatch] = useReducer(updateState, initialState); // useReducer accepts a reducer(func) and state

  return (
      <div>
        <div id="middle" className="TopInput">
        {/* These are the logos for each store with the onclick functionality. */}
        <LogosHook dispatch={() => dispatch({
              payload:'wholeFoodsSelected',
              type: 'REVEAL_STORE',
            })}
            logo={wfLogo}
          />
        <LogosHook dispatch={() => dispatch({
              payload:'traderJoesSelected',
              type: 'REVEAL_STORE',
            })}
            logo={traderJoeLogo}
          />
        <LogosHook dispatch={() => dispatch({
              payload:'ralphsSelected',
              type: 'REVEAL_STORE',
            })}
            logo={ralphsLogo}
          />
        </div>

        <div className="BottomInputs">
        <form onSubmit={onSubmit} id="inputs">
            {/* Input field to enter food items */}
            <input
              onChange={onFoodInput}
              className="field"
              type="text"
              placeholder="Food Item"
            />
            {/* click submit button for food */}
            <input className="btn" type="submit" value="+" />
          </form>
          <div className="budget">
            {/* Input field to enter budget */}
            <input
              onChange={onBudgetInput}
              className="field"
              type="text"
              placeholder="Max Budget"
            />
          </div>
        </div>
        
        <Container props={state} />
        <Footer props={state} />
      </div>
  )
}

// // captures food input in food key
// onFoodInput(e) {
//   this.setState((prevState) => {
//     return {
//       ...prevState,
//       food: e.target.value,
//     };
//   });
//   console.log('State.food', this.state.food);
// }

// // captures food input in food key
// onBudgetInput(e) {
//   this.setState((prevState) => {
//     return {
//       ...prevState,
//       maxBudget: e.target.value,
//     };
//   });
// }

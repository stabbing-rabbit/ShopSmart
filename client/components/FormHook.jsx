import React, { useReducer } from 'react'
import wfLogo from '../assets/wholeFoods.png'
import traderJoeLogo from '../assets/traders.png'
import ralphsLogo from '../assets/ralphs.png'
import ContainerHook from './form-components/ContainerHook.jsx'
import LogosHook from './form-components/LogosHook.jsx';

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
      case 'UPDATE_FOOD': {
        return {
          ...state,
          food: action.payload,
        }
      }
      case 'UPDATE_BUDGET': {
        return {
          ...state,
          maxBudget: action.payload,
        }
      }
    default: {
        return state;
      }
  }
}

function FormHook() {
  // sets an initial State
  // dispatch is the a way of updating the state
  // dispatch accepts an object with properties of payload and type then passed onto updateState
  const [state, dispatch] = useReducer(updateState, initialState); // useReducer accepts a reducer and state

  return (
      <div>
        <div id="middle" className="TopInput">
          {/* These are the logos for each store with the onclick functionality. */}
          <LogosHook
            dispatch={() => dispatch({
              payload:'wholeFoodsSelected',
              type: 'REVEAL_STORE',
            })}
            logo={wfLogo}
          />
          <LogosHook
            dispatch={() => dispatch({
              payload:'traderJoesSelected',
              type: 'REVEAL_STORE',
            })}
            logo={traderJoeLogo}
          />
          <LogosHook
            dispatch={() => dispatch({
              payload:'ralphsSelected',
              type: 'REVEAL_STORE',
            })}
            logo={ralphsLogo}
          />
        </div>

        <div className="BottomInputs">
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log('SUBMITTED')
          }} id="inputs">
            {/* Input field to enter food items */}
            <input
              onChange={(e) => dispatch({
                payload: e.target.value,
                type: 'UPDATE_FOOD',
              })}
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
              onChange={(e) => dispatch ({
                payload: e.target.value,
                type: 'UPDATE_BUDGET',
              })}
              className="field"
              type="text"
              placeholder="Max Budget"
            />
          </div>
        </div>
        {/* displays cards for each store and each stores associated food prices */}
        <ContainerHook
          wfSelected={state.wholeFoodsSelected}
          raSelected={state.ralphsSelected}
          tjSelected={state.traderJoesSelected}
          wfSubtotal={state.wholeFoodsSubtotal}
          raSubtotal={state.traderJoesSubtotal}
          tjSubtotal={state.ralphsSubtotal}
          wgList={state.wholeFoodsList}
          tjList={state.traderJoesList}
          raList={state.ralphsList}
          maxBudget={state.maxBudget}
        />
        {/* <Footer props={state} /> */}
      </div>
  )
}

export default FormHook;

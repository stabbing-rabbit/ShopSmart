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
  // very similar to redux:
  // state is the initial state of the app
  // dispatch is the a way of updating the state
  // dispatch accepts an object with properties of payload and type then passed onto updateState
  const [state, dispatch] = useReducer(updateState, initialState); // useReducer accepts a reducer(func) and state

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
        <form onSubmit={() => {console.log('SUBMITTED')}} id="inputs">
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
        
        <ContainerHook
          wfSelected={state.wholeFoodsSelected}
          raSelected={state.ralphsSelected}
          tjSelected={state.traderJoesSelected}
        />
        {/* <Footer props={state} /> */}
      </div>
  )
}

export default FormHook;

  // // pushes captured food key into array of foodsList
  // onSubmit(e) {
  //   e.preventDefault();
  //   // We're setting up a new array to update the food list in state, using
  //   // this.state.food, which is the user's input into the food item input.
  //   const newFoodsList = [...this.state.foodsList, this.state.food];

  //   // Here we're spreading in the current arrays for each store in state
  //   // PLEASE NOTE that these contain prices.
  //   const newWholeFoodsList = [...this.state.wholeFoodsList];
  //   const newRalphsList = [...this.state.ralphsList];
  //   const newTraderJoesList = [...this.state.traderJoesList];

  //   // Each query pulls the price of the item from the database and pushes it
  //   // into these arrays and then uses setState to overwrite the old
  //   // arrays.

  //   query(this.state.food, 'tj').then((result) => {
  //     newTraderJoesList.push(result.data);
  //     this.setState({
  //       foodsList: newFoodsList,
  //       traderJoesList: newTraderJoesList,
  //     });
  //   });
  //   query(this.state.food, 'wf').then((result) => {
  //     newWholeFoodsList.push(result.data);
  //     this.setState({
  //       wholeFoodsList: newWholeFoodsList,
  //     });
  //   });
  //   query(this.state.food, 'ralphs').then((result) => {
  //     newRalphsList.push(result.data);
  //     this.setState({
  //       ralphsList: newRalphsList,
  //     });
  //   });
  // }
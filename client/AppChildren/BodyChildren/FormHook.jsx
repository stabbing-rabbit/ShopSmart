import React, { useState, useReducer, useStoreState } from 'react'

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

const updateState = (state, action) => {
  switch ('UPDATE_FOOD') {
      case 'UPDATE_FOOD' : {
        return {
          ...state,
          food: action.payload
        }
      }
  }
}

export default function FormHook() {
  const [state, dispatch] = useReducer(updateState, initialState);

  console.log(state)
  dispatch({ type: 'UPDATE_FOOD', payload: 'Cake' })
  console.log(state)
  return (
      <div>
          
      </div>
  )
}

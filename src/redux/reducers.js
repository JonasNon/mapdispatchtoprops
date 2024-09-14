import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    
    switch(action.type) {
        case "ADD_CAR":
          console.log([...state, action.value])
          return [...state, action.value]
        case "REMOVE_CAR":
          console.log(state)
          let tempArr = [...state]
          tempArr.splice(action.value, 1)
          console.log(tempArr)
          return tempArr
        default:
          return state
    }
}

export default combineReducers({ user, cars })
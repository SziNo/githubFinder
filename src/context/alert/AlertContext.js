import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initalState = null

  const [state, dispatch] = useReducer(alertReducer, initalState)

  // Set an alert
  const setAlert = (msg, group) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, group },
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
  }

  return (
    <AlertContext.Provider value={{ setAlert, alert: state }}>
      {children}
    </AlertContext.Provider>
  )
}

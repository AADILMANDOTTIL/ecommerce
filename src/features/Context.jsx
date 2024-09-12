import React, { Children, createContext, useReducer } from 'react'
import cartReducer from './CartReducer.jsx'
export const cartContext = createContext()

function Context({children}) {
    const [cart, dispatch] = useReducer(cartReducer, [])
    return (
        <cartContext.Provider value={{ cart, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}

export default Context

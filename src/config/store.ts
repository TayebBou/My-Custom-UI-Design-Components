import { configureStore } from '@reduxjs/toolkit'
import navBarReducer from './stateSlices/navBarSlice'

const store = configureStore({
    reducer : {
        navBar: navBarReducer
    }
})


export default store;
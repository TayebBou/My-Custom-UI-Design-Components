import { createSlice } from '@reduxjs/toolkit'
import { INavBarStates } from '../../shared/types/navBarStates.model'

const initialState: INavBarStates = {
  isSmallScreen: false,
  displaySide: false,
  closeSideBar: false,
  isNavMenuExpanded: false,
  isNavMenuExiting: false
}

const navBarSlice = createSlice({
  name: 'navBar',
  initialState: initialState,
  reducers: {
    handleResize(state: INavBarStates) {
      if (window.innerWidth < 900) {
        state.isSmallScreen = true
      } else {
        state.isSmallScreen = false
        state.closeSideBar = true
      }
    },
    setDisplaySide(state: INavBarStates, action) {
      state.displaySide = action.payload
    },
    setCloseSideBar(state: INavBarStates, action) {
      state.closeSideBar = action.payload
    },
    switchSideBar(state: INavBarStates) {
      if (state.displaySide) {
        state.closeSideBar = true
      } else {
        state.displaySide = true
        state.closeSideBar = false
      }
    },
    switchFontBlack(state: INavBarStates) {
      state.isNavMenuExpanded = !state.isNavMenuExpanded
    },
    switchIsNavMenuExiting(state: INavBarStates) {
      state.isNavMenuExiting = !state.isNavMenuExiting
    },
  },
})

export const navBarActions = navBarSlice.actions
export default navBarSlice.reducer

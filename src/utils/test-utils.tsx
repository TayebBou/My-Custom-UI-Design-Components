import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { Store } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import globalStore from '../config/store'
import { IRootState } from '../shared/types/rootState.model'
// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<IRootState>
  store?: Store
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      navBar: {
        isSmallScreen: false,
        displaySide: false,
        closeSideBar: false,
        isNavMenuExpanded: false,
        isNavMenuExiting: false,
      },
    },
    // Automatically create a store instance if no store was passed in
    store = globalStore,
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

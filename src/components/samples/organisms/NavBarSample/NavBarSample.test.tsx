import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import { renderWithProviders } from '../../../../utils/test-utils'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarSample from './NavBarSample'
import store from '../../../../config/store'

describe('NavBarSample component', () => {
  beforeEach(() => {
    // Arrange
    renderWithProviders(<Router><NavBarSample /></Router>)
  })
  test('when user click on navBar Menu the options and a black font are invoked in the document', async () => {
    const navMenu = screen.getByText('UI Atoms')
    // Act
    fireEvent.click(navMenu)
    const blackFont = document.body.getElementsByClassName('black-font')[0]    
    const navMenuOption = screen.getByText('Icon')
    // Assert
    expect(navMenuOption).toBeInTheDocument()
    expect(blackFont).toBeInTheDocument()
    // set back store isNavMenuExpanded state to false
    fireEvent.click(navMenu)
    await waitFor(() => {
      expect(store.getState().navBar.isNavMenuExpanded).toBeFalsy()
    })
  })
  test('when user click everywhere else the options and the black font are removed from the dom', async () => {
    const navMenu = screen.getByText('UI Atoms')
    // Act
    fireEvent.click(navMenu)
    const blackFont = document.body.getElementsByClassName('black-font')[0]    
    fireEvent.mouseDown(document.body)
    const navMenuOption = screen.getByText('Icon')
    // Assert
    expect(blackFont.getAttribute('class')).toBe('black-font out')
    await waitFor(() => {
      expect(navMenuOption).not.toBeInTheDocument()
      expect(blackFont).not.toBeInTheDocument()
      expect(store.getState().navBar.isNavMenuExiting).toBeFalsy()
    })
  })
  test('if window innerwidth is greater than or equal 900px the navMenu is invoked and there is no hamburger button for sideBar', () => {
    const navMenu = screen.getByText('UI Organisms')
    const hamburger = screen.queryByAltText('hamburger icon')
    
    // Assert
    expect(navMenu).toBeInTheDocument()
    expect(hamburger).not.toBeInTheDocument()
  })
  test('if window innerwidth is under 900px the hamburger button for sideBar is invoked in the DOM and there is no navMenu', () => {
    window.innerWidth = 899
    // Act
    act(() => {
        global.dispatchEvent(new Event('resize'))
    })
    const navMenu = screen.queryByText('UI Organisms')
    const hamburger = screen.getByAltText('hamburger icon')
    // Assert
    expect(navMenu).not.toBeInTheDocument()
    expect(hamburger).toBeInTheDocument()
  })
  test('when user click on hamburger button the sideBar is invoked in the document', () => {
    const hamburger = screen.getByAltText('hamburger icon')

    // Act
    fireEvent.click(hamburger)
    const sideMenu = screen.getByText('UI Atoms')
    // Assert
    expect(sideMenu).toBeInTheDocument()
  })
  test('when user click on close button the sidebar is removed from the dom', async () => {
    const hamburger = screen.getByAltText('hamburger icon')

    // Act
    fireEvent.click(hamburger)
    const closeButton = screen.getByAltText('close icon')
    fireEvent.click(closeButton)
    const sideMenu = screen.queryByText('UI Molecules')
    // Assert
    await waitFor(() => {
        expect(sideMenu).not.toBeInTheDocument()
    })
  })
  test('when user click on an option of the SideBarMenu organism the sidebar is removed from the dom', async () => {
    const hamburger = screen.getByAltText('hamburger icon')
    // Act
    fireEvent.click(hamburger)
    const sideMenuO = screen.getByText('UI Organisms')
    fireEvent.click(sideMenuO)
    const linksO = within(sideMenuO.closest('div') as HTMLDivElement).getAllByRole('link')
    fireEvent.click(linksO[0])
    // Assert
    await waitFor(() => {
        expect(sideMenuO).not.toBeInTheDocument()
    })
  })
  test('when user click on an option of the SideBarMenu molecule the sidebar is removed from the dom', async () => {
    const hamburger = screen.getByAltText('hamburger icon')
    // Act
    fireEvent.click(hamburger)
    const sideMenuM = screen.getByText('UI Molecules')
    fireEvent.click(sideMenuM)
    const linksM = within(sideMenuM.closest('div') as HTMLDivElement).getAllByRole('link')
    fireEvent.click(linksM[0])
    // Assert
    await waitFor(() => {
        expect(sideMenuM).not.toBeInTheDocument()
    })
  })
  test('when user click on an option of the SideBarMenu atom the sidebar is removed from the dom', async () => {
    const hamburger = screen.getByAltText('hamburger icon')
    // Act
    fireEvent.click(hamburger)
    const sideMenuA = screen.getByText('UI Atoms')
    fireEvent.click(sideMenuA)
    const linksA = within(sideMenuA.closest('div') as HTMLDivElement).getAllByRole('link')
    fireEvent.click(linksA[0])
    // Assert
    await waitFor(() => {
        expect(sideMenuA).not.toBeInTheDocument()
    })
  })
})

export {}

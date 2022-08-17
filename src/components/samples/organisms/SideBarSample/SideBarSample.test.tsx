import { fireEvent, screen } from '@testing-library/react'
import SideBarSample from './SideBarSample'
import { renderWithProviders } from '../../../../utils/test-utils'
import store from '../../../../config/store'

describe('SideBarSample component', () => {
  test('when user click on the hamburger button the sideBar is invoked in the document', () => {
    // Arrange
    renderWithProviders(<SideBarSample />)
    const title = screen.getByText('Click on hamburger', { exact: false })
    const hamburgerButton = (title.closest(
      'div',
    ) as HTMLDivElement).getElementsByTagName('button')[0]
    // Act
    fireEvent.click(hamburgerButton)
    // Assert
    expect(store.getState().navBar.displaySide).toBeTruthy()
  })
})

export {}

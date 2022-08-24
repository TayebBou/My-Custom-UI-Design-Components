import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Modal from "./Modal"
import renderer from 'react-test-renderer'

describe('Modal component', () => {
    let onClose: jest.Mock<any, any>;
    let rerender :(ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => void
    beforeEach(() => {
        // Arrange
        onClose = jest.fn()
        rerender = render(<Modal onDisplay={true} onClose={onClose}><p>Sample modal</p></Modal>).rerender
    })
    test('matches the snapshot', () => {
        const tree = renderer.create(<Modal onDisplay={true} onClose={onClose}><p>Sample modal</p></Modal>).toJSON()
        // Assert
        expect(tree).toMatchSnapshot()
    })
    test('the modal is rendred on the screen', () => {
        const text = screen.getByText('Sample modal')
        // Assert
        expect(text).toBeInTheDocument()
    })
    test('when user click on the black font the onClose method is called after 0.17s (time for animation)', async () => {
        const blackFont = document.getElementsByClassName('black-font')[0]
        // Act
        fireEvent.click(blackFont)
        // Assert
        await waitFor(() => {
            expect(onClose).toHaveBeenCalled()
        })
    })
    test('when user click on the close button the onClose method is called after 0.17s (time for animation)', async () => {
        // when the modal is with onDisplay prop at false there is no timer to clear
        rerender(<Modal onDisplay={false} onClose={onClose}><p>Sample modal</p></Modal>)
        rerender(<Modal onDisplay={true} onClose={onClose}><p>Sample modal</p></Modal>)
        const closeButton = screen.getByAltText('close icon')
        // Act
        fireEvent.click(closeButton)
        // Assert
        await waitFor(() => {
            expect(onClose).toHaveBeenCalled()
        })
        // when the modal is with onDisplay prop at false after the closing there is a timer to clear
        rerender(<Modal onDisplay={false} onClose={onClose}><p>Sample modal</p></Modal>)
    })
})
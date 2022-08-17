import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import SideBar from "./SideBar"

describe("SideBar component", () => {

    test("when user click on close button the onClose function is invoked", async () => {
        // Arrange
        const onClose = jest.fn()
        render(<SideBar onClose={onClose}>children</SideBar>)
        const closeButton = screen.getByRole('button')
        // Act
        fireEvent.click(closeButton)
        // Assert
        // the onClose function is executed after 0.5s ( time for cancel animation )
        await waitFor(() => {
            expect(onClose).toHaveBeenCalled()
        })
    })
    // to close the sideBar dynamically we use the closeSideBar props
    test("when user render sideBar with closeSideBar prop at true the onClose function is invoked", async () => {
        // Arrange
        const onClose = jest.fn()
        render(<SideBar onClose={onClose} closeSideBar={true}>children</SideBar>)
        // Assert
        // the onClose function is executed after 0.5s ( time for cancel animation )
        await waitFor(() => {
            expect(onClose).toHaveBeenCalled()
        })
    })
})

export {}
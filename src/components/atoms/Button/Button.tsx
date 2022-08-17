import { FC } from "react";
import styles from './Button.module.css'

export enum ButtonTypes {
  BUTTON= 'button',
  RESET= 'reset',
  SUBMIT= 'submit',
}

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    type?: ButtonTypes
    disabled?: boolean
}

const Button:FC<ButtonProps> = (props) => {

    const { children, type, className, onClick, disabled} = props

    return (
        <button onClick={onClick} className={styles.button + ' ' + className} type={type} disabled={disabled} >
            {children}
        </button>
    )
}

Button.defaultProps = {
    onClick: () => {},
    className: '',
    type: ButtonTypes.BUTTON,
    disabled: false
}

export default Button
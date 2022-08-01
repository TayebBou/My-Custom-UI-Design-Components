import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './DropDownItem.module.css'

type DropDownItemProps = {
    path: string
    title: string
    onClick?: () => void
}

const DropDownItem: FC<DropDownItemProps> = (props) => {

    const { path, title, onClick } = props

    return (
        <Link to={path} onClick={onClick} className={styles.link}>
            <h2 className={styles.h2}>{title}</h2>
        </Link>
    )
}

DropDownItem.defaultProps = {
    onClick: () => {},
    path: '/',
    title: ''
}

export default DropDownItem;
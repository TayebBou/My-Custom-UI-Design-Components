import { FC } from "react";
import styles from './Icon.module.css'

type IconProps = {
    src: string
    alt: string
    className?: string
    size?: string 
}

const Icon: FC<IconProps> = (props) => {

    const {className, src, alt, size} = props;

    return (
        <img className={`${styles.icon} ${className}`} style={{ width: size, height: size }} src={src} alt={alt} />
    )
}

Icon.defaultProps = {
    className: ''
}

export default Icon;
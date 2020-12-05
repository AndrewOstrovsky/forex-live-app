import React from 'react'

import './Button.scss'

type ButtonProps = {
    children?: React.ReactNode
}

const Button = ({ children }: ButtonProps) => <button type="submit" className="c-button">{ children }</button>

export default Button
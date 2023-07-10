import React from 'react'
import './Button.css'

const Button = ({ content, type, onButtonClick }) => {
    return (
        <div className={`Button ${content == '0' ? 'zero' : ''} ${type || ""}`} onClick={onButtonClick(content)}>{content}</div>
    )
}

export default Button
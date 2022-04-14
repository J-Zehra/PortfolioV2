import React from 'react'

export const Logo = ({className, firstLetter, text}) => {
    return (
        <h1 className={className}>
            <span>{firstLetter}</span>
            {text}
        </h1>
    )
}

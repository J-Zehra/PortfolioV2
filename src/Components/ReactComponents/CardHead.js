import React from 'react'

export const CardHead = ({className, title, logo}) => {
    return (
        <div className={className}>
            {logo}
            <h1>{title}</h1>
        </div>
    )
}

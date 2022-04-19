import React from 'react'

export const SectionLabel = ({ className, label, icon}) => {
    return (
        <div className={className}>
            <h1>{label}</h1>
            {icon}
        </div>
    )
}

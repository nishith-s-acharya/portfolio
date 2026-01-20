import React from 'react'

const Badge = ({ title }) => {
    return (
        <span className='py-1.5 px-3 text-xs font-semibold text-OffWhite bg-zinc-800/50 border border-white/5 rounded-lg hover:border-RoyalBlue/50 hover:text-RoyalBlue transition-colors cursor-default'>{title}</span>
    )
}

export default Badge
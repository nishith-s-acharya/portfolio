import React from 'react'

const LinearBar = ({ title, percent, bgColor }) => {
    return (
        <div className="">
            <div className="flex justify-between mb-1">
                <span className="text-xs text-OffWhite font-medium">{title}</span>
                <span className="text-xs text-LightGray/80">{percent}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 dark:bg-zinc-800">
                <div className={`${bgColor} h-1.5 rounded-full w-16 shadow-lg shadow-purple-500/20`} style={{ width: `${percent}` }}></div>
            </div>
        </div>
    )
}

export default LinearBar
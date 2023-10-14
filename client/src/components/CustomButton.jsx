import React from 'react'

const CustomButton = ({btnType , title , handleClick, styles}) => {
  return (
    <button
    type={btnType}
    className={`${styles} rounded-[10px] text-white text-base leading-[26px] font-semibold font-epilogue min-h-[52px] px-4`}
    onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton
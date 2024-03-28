import React from 'react'

const Button = ({title,onclickHandler,value}) => {
  return (
    <button onClick={onclickHandler} value={value} className={`px-4 py-1 border hover:bg-blue hover:text-white`}>
        {title}
    </button>
  )
}

export default Button

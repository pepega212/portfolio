import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient btn font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] outline-none hover:${styles}`}>
      Get Started
    </button>
  )
}

export default Button
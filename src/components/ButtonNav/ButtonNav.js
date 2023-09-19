import React from 'react'
import "./ButtonNav.scss"

const ButtonNav = ({
    text, onclick, onhover, 
}) => {
  return (
    <button 
        style={{
            backgroundColor:'transparent',
            color:'white',
            border:'none',
            cursor:'pointer',
            fontSize:"18px"
        }}
    className='button_nav' onclick={onclick}   > 
        {text}
    </button>
  )
}

export default ButtonNav
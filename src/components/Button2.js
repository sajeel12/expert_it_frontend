import React, { useState } from 'react'

const Button2 = ({
  text
}) => {

  const [hover, setHover] = useState(false);

  return (
    <button style={{
      // backgroundColor: hover? 'white':   'transparent',
      background: hover ? "white" : "linear-gradient(135deg, #efefef 0%,#e0e0e0 41%,#e0e0e0 41%,#ffffff 100%,#ffffff 100%) ",
      boxShadow: hover && "0 0 60px rgba(255, 255, 255, 0.7)",
      color: 'black',
      border: 'none',
      padding: '6px 10px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: "18px",
      transition: '0.2s'


    }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  )
}

export default Button2
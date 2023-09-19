import React, { useState } from 'react'

const Button1 = ({
    text
}) => {

    const [hover, setHover] = useState(false);

  return (
    <button style={{
        backgroundColor: hover? 'white':   'transparent',
            color: hover? 'black': 'white' ,
            border:'1px solid white',
            padding:'5px 10px',
            borderRadius: '8px',
            cursor:'pointer',
            fontSize:"18px",
            transition:'0.2s'

            
    }} 
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
        {text}
    </button>
  )
}

export default Button1
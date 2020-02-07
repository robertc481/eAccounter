import React from 'react';



const Input = ({ ariaLabel, name, placeholder, children, changeFn }) => (
   <>
      <label >
         <span
            role='img'
            aria-label={ariaLabel}
         >{children}</span>
         <input
            type='number'
            name={name}
            placeholder={placeholder}
            onChange={changeFn} />
      </label>
   </>
)
export default Input;

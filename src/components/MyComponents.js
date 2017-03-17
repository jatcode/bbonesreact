import React from 'react';

export const FormInput = ({type,label,name,placeholder,value,onChange})=>
  <div className='formfield'>
    <label >
      {label}:
    </label>
    <input type={type} name={name} placeholder={label}
      value={value} onChange={onChange}
    />    
  </div>
export const FormInput1 = ({type,label,name,placeholder})=>
  <div className='formfield'>    
    <input type={type} name={name} placeholder={label}
			// value={value} onChange={onChange}
    />    
  </div>

  export const FormInput2 = ({label, name}) => 
  <div>
    <div class="title">Login</div>
    <input type="text" placeholder="Username"/>
    <input type="password" placeholder="Password"/>
    <input type="submit" value="Get in there"/>
  </div>


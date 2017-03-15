import React from 'react';

export const FormInput = ({label,name})=>
  <div className='formfield'>
    <label >
      {label}:
    </label>
    <input type='text' name={name}/>    
  </div>

  export const FormInput1 = ({label,name})=>
  <div>
  <div class="title">Login</div>
  <input type="text" placeholder="Username"/>
  <input type="password" placeholder="Password"/>
  <input type="submit" value="Get in there"/>
  </div>


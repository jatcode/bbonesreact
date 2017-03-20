import React, { Component, PropTypes } from 'react';

export const FormInput = ({type,label,name,placeholder,value,onChange})=>
  <div className='formfield'>
    <label >
      {label}:
    </label>
    <input type={type} name={name} placeholder={label}
      value={value} onChange={onChange}
    />    
  </div>
export const FormInput1 = ({type, label, name, placeholder, value, onChange})=>
  <div className='formfield'>    
    <input type={type} name={name} placeholder={placeholder}
		value={value} onChange={onChange}
    />    
  </div>

export class InputField extends Component{
  constructor({type,label,name,placeholder,value,onChange}){
    super(props)
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.props.onChange(e.target.name, e.target.value);
  }
  render(){
    return(
      <div>
        <label htmlFor={input.id}>{input.label || input.name}</label>
        <input
            // className="form-control"
            id={input.id}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={input.value}
            onChange={this.onChange}
        />
      </div>
    );
  }
}
InputField.propTypes = {
  onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
  type: 'text'
}
  


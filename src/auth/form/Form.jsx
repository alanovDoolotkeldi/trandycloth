import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

function Form() {
  return (
    <form className='login-form'>
      <div className="login-form-input">
        <div className="form-dropdown">
            <img src="/public/assets/svg/kyrgyzstan.svg" alt="" />
            <IoMdArrowDropright />



        </div>
            <input type="text" value="+996" />

      </div>
      
      <button type='button'>Получить код</button>
    </form>
  )
}

export default Form

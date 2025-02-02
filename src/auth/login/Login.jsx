import React from 'react'
import Form from '../form/Form'
import { SlArrowDown } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <div className="wrapper">
          <div className="login-container">
            <div className="login-info">
              <h1> Войти или создать профиль </h1>
              <div className="login-info-content">
              <Form/>
              <div className="lofin-info-bottom">
              <SlArrowDown />
              <Link>
              <span>Соглашаюсь</span> с правилами пользования <br /> торговой площадкой <span>и</span> возврата</Link>
              </div>
            </div>
              </div>
          </div>
        </div>
      

    </div>
  )
}

export default Login

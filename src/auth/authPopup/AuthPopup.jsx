import React from 'react'
import CurrencyPopup from '../../components/currencyPopup/CurrencyPopup'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'

function AuthPopup({setIsNavigate}) {
  return (
    <div className='auth-popup-container'>
        <div className="auth-popup-info">
            <div className="auth-popup-info-top">
                <div className="auth-popup-content">
                    <div className="auth-popup-content-image">

                    </div>
                    <div className="auth-popup-content-text">
                        <span>После входа вам будут доступны товары с персональными скидками</span>

                    </div>
                    <Link to="/login" className="auth-popup-content-button">
                        <button>Войти или создать профиль</button>

                    </Link>

                </div>
                <div onClick={()=>setIsNavigate(false)} className="auth-popup-info-top-close">
                <IoClose />
                </div>

            </div>
            <div className="auth-popup-info-bottom">
                <div className="auth-popup-info-button">
                    <button>Валюта <span><img src="/public/assets/svg/kyrgyzstan.svg" alt="" /> kgz</span></button>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default AuthPopup

import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function RightHeader() {
  return (
    <div>
             <div className="header-right">
          <div className="block block-2">
          <IoLocationOutline className='IoLocationOutline'/>
          </div>
          <Link to="/Basket" className="block">
            {/* <img  src="/public/assets/svg/Basket.svg" alt="" /> */}
            Корзина

          </Link>
          <div className="block">
            {/* <img src="/public/assets/svg/man.svg" alt="" /> */}
            Войти

          </div>
         </div>
      
    </div>
  )
}

export default RightHeader

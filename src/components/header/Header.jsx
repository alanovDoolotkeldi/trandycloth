import React, { useState } from 'react'
import { GiBookmarklet } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Search from '../search/Search';
import RightHeader from '../rightHeader/RightHeader';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
// import styles from "../../styles/block/_header.module.scss"
function Header() {
  const [placeholder , setPlaceHolder] = useState("тапочки")
  const [open, setIsOpen] = useState(false);
  return (
    <header className={open?"header-open":"header-close"}>
        <div className="wrapper">
          <div className="header-container">
{/* <h1>TrandyCloth</h1> */}
         {/* <img src="https://play-lh.googleusercontent.com/h_tlzniniVzhLKTN8nmAnF0FzpdAeMmv1_sCyNBZwsXb8eW93yCZBiyjJLFbUjpylgI=w240-h480-rw" alt="" /> */}
         <div className='logo'>
          <Link className='logo-image' to="/">
         <img src="/public/assets/svg/Frame 2 (1).svg" alt="" />
          </Link>
         <BurgerMenu/>



         </div>
         <div onClick={()=>setIsOpen(false)} className="arrow-left">
         <IoArrowBackOutline className='IoArrowBackOutline'/>

         </div>
         {/* <div className="catalog">
          <GiBookmarklet className='GiBookmarklet' />
          Все котегории
          <IoIosArrowDown className='IoIosArrowDown' />

         </div> */}
         <div className="container-info">
          <Search setIsOpen={setIsOpen} open={open}/>
     <RightHeader/>
      
    
         </div>
          </div>
        </div>
        
      
    </header>
  )
}

export default Header

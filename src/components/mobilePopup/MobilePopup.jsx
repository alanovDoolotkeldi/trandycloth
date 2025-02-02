import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function MobilePopup() {
  const [open, setOPen] = useState(false)
  const [data ,setDaata] = useState([1,2,3,4,4])
  return (
    <div className="mobile-popup">
      <div className="mobile-wrapper">
        <div className="mobile-popup-menu">
          <ul>
            <li className="mobile-menu-li">
              <a href="">
                <span>
                  <img src="/public/assets/images/image01.svg" alt="" />
                </span>
                НГ НА НБ
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <img src="/public/assets/svg/svg01.svg" alt="" />
                </span>
                Распродажа
              </a>
            </li>
   {
    data.map((item)=>(
        <>
                <li onClick={()=>setOPen(true)}>
              <span>
                <img src="/public/assets/svg/svg01.svg" alt="" />
              </span>
              Распродажа
              <div className="mobile-span-2">
                <img src="/public/assets/svg/svg02.svg" alt="" />
              </div>
              <div className="ul-popup"></div>
            </li>
        
        </>
    ))
   }
          </ul>
        </div>{" "}
      </div>
      {open && (
        <>
          <div className="mobile-li-open">
            <div className="mobile-li-open-title">
              <button onClick={()=>setOPen(false)}>
                <FiArrowLeft className="FiArrowLeft" />
              </button>
              <h5>Женщинам</h5>
            </div>

            <ul>
     {
        data.map((el)=>(
 <>
            <li>
            <Link to="/about" className="w-full">
            Брюки
            </Link>
        </li></>
        ))
     }
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default MobilePopup;

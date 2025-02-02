import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

function FooterList({item}) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  function handleClick () {
    setOpen(!open);
  }
useEffect(()=>{
  setWidth(window.innerWidth);
},[width])

  return (
    <div className="footer-info-top-block">
      <div
        className="footer-info-top-block-title"
        onClick={() => handleClick()}
        role="button"
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        <span>
          <p>Покупателям</p>
        </span>
        {
        
        width<=1024&&<IoIosArrowDown className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} />
        }
      </div>
      <div
        className={`footer-info-top-block-content ${
          width<=1024&&open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } transition-all duration-300 ease-in-out overflow-hidden lg:opacity-100 lg:max-h-[1000px]`}
      >
        <div className="footer-info-top-block-texts">
          <div className="footer-info-top-block-texts-title">
            <h4>Вопросы и ответы</h4>
          </div>
          <div className="footer-info-top-block-texts-item">
            <Link to="/legal-info">Юридическая информация</Link>
            <Link to="/sales-rules">Правила продажи</Link>
            <Link to="/usage-rules">Правила пользования торговой площадкой</Link>
            <Link to="/privacy-policy">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterList;

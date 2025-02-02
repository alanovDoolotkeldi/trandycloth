import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);
  const inputRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleDocumentClick = (event) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      
      document.body.style.overflow = "";
      document.removeEventListener("click", handleDocumentClick);
    };

    // Очистка при размонтировании компонента
   
  }, [isOpen]);

  return (
    <div className="burger-menu">
      <button
        className={`burger-menu-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        ref={inputRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="burger-menu-content"
      >
        <div ref={nodeRef} className="burger-menu-content">
          <ul className="header-menu">
            <li className="header-menu-li">
              <a href="">
                <span>
                  <img src="/public/assets/images/image01.svg" alt="" />
                </span>
                Распродажа
              </a>
            </li>
            <li className="header-menu-li-1">
              <a href="">
                <span>
                  <img src="/public/assets/images/image01.svg" alt="" />
                </span>
                Распродажа
              </a>
            </li>
            <li className="">
              <span>
                <img src="/public/assets/svg/svg01.svg" alt="" />
              </span>
              Распродажа
              <div className="span-2">
                <img src="/public/assets/svg/svg02.svg" alt="" />
              </div>
             <div className="ul-popup">
             <ul>
                <li className="ul-popup-li">Дом</li>
                <li>
                  <Link>Ванная</Link>
                </li>
                <li>
                  <Link>Кухня</Link>
                </li>
              </ul>
             </div>
            </li>
          </ul>
        </div>
      </CSSTransition>
      {isOpen && (
        <div className="burger-menu-overlay" onClick={toggleMenu}></div>
      )}
    </div>
  );
}

export default BurgerMenu;

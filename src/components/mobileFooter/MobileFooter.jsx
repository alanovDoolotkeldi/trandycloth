import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { RiMenuSearchLine } from "react-icons/ri";
import MobilePopup from "../mobilePopup/MobilePopup";
import AuthPopup from "../../auth/authPopup/AuthPopup";

function MobileFooter() {
  const location = useLocation();
  const [popup, setPopup] = useState(false);
  const [ispathname, setIsPathname] = useState(null);
  const [isNavigate, setIsNavigate] = useState(false);
  const [user, setIsUser] = useState(null);
  const navigate = useNavigate();
  function handleFill(pathname) {
    if (popup) {
      setIsPathname("search");
    } else if (pathname === "/") {
      setIsPathname("home");
    } else if (pathname === "/about") {
      setIsPathname("basket");
    } else if (pathname === "/heart") {
      setIsPathname("hear");
    } else if (pathname === "/profile") {
      setIsPathname("man");
    } else {
      setIsPathname("null");
    }
  }
  function handleNavigate(provider) {
    if (user) {
      setIsNavigate(false);
      navigate(`/${provider}`);
    } else {
      setIsNavigate(true);
    }
  }
  useEffect(() => {
    handleFill(location.pathname);
  }, [location.pathname, popup]);
  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "";
  }, [popup]);
  return (
    <>
      <div className="footer-mobile">
        <div className="wrapper">
          <div className="adaptive-footer-main">
            <div className="adaptive-footer-blocks">
              <Link
                onClick={() => setPopup(false)}
                to="/"
                className="adaptive-footer-block"
              >
                <span>
                  <BiSolidHome
                    className={`img ${
                      ispathname === "home"
                        ? "text-[#2A6FDE]"
                        : "text-[#C8C8D1]"
                    }`}
                  />
                </span>
              </Link>
              <div
                onClick={() => setPopup(!popup)}
                className="adaptive-footer-block"
              >
                <span>
                  <RiMenuSearchLine
                    className={`img ${
                      ispathname === "search"
                        ? "text-[#2A6FDE]"
                        : "text-[#C8C8D1]"
                    }`}
                  />
                </span>
              </div>
              <Link
                onClick={() => setPopup(false)}
                to="/about"
                className="adaptive-footer-block"
              >
                <span>
                  <SlBasket
                    className={`img ${
                      ispathname === "basket"
                        ? "text-[#2A6FDE]"
                        : "text-[#C8C8D1]"
                    }`}
                  />
                </span>
              </Link>
              <div
                onClick={() => {
                  setPopup(false);
                  handleNavigate("heart");
                }}
                className="adaptive-footer-block"
              >
                <span>
                  <FaHeart
                    className={`img ${
                      ispathname === "heart"
                        ? "text-[#2A6FDE]"
                        : "text-[#C8C8D1]"
                    }`}
                  />
                </span>
              </div>
              <div
                onClick={() => {
                  setPopup(false);
                  handleNavigate("profile");
                }}
                className="adaptive-footer-block"
              >
                <span>
                  <FcManager
                    className={`img ${
                      ispathname === "man" ? "text-[#2A6FDE]" : "text-[#C8C8D1]"
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup && <MobilePopup />}
      {isNavigate && <AuthPopup setIsNavigate={setIsNavigate} />}
    </>
  );
}

export default MobileFooter;

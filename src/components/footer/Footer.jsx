import React, { useState } from "react";
import MobileFooter from "../mobileFooter/MobileFooter";
import { Link } from "react-router-dom";
import FooterList from "../footerList/FooterList";

function Footer() {
  return (
    <footer className="">
      <div className="footer-destop">
        <div className="wrapper">
          <div className="footer-info">
            <div className="footer-info-top">
              <div className="footer-info-top-blocks">
                <FooterList />
                <FooterList />
                <FooterList />
                <FooterList />
              </div>

              <div className="applications">
                <Link className="application-item">
                  <img src="/public/assets/svg/app-store.png" alt="" />
                </Link>
                <Link className="application-item">
                  <img src="/public/assets/svg/app-store.png" alt="" />
                </Link>
                <Link className="application-item">
                  <img src="/public/assets/svg/app-store.png" alt="" />
                </Link>
                <Link className="application-item">
                  <img src="/public/assets/svg/app-store.png" alt="" />
                </Link>
              </div>
              <div className="footer-info-top-wr-code">
                <img src="/public/assets/svg/qr-apps.svg" alt="" />
              </div>
            </div>
            <div className="footer-info-bottom">
              <div className="footer-info-bottom-content">
                <div className="footer-info-bottom-content-texts">
                  <Link>© Wildberries 2004–2024  Все права защищены.</Link>
                  <Link> Применяются рекомендательные технологии</Link>

                </div>
                <div className="footer-info-content-images">
                  <div className="footer-info-content-images-block">
                    <img src="/public/assets/svg/wk.svg" alt="" />
                  </div>
                  <div className="footer-info-content-images-block">
                    <img src="/public/assets/svg/wk.svg" alt="" />
                  </div>
                  <div className="footer-info-content-images-block">
                    <img src="/public/assets/svg/wk.svg" alt="" />
                  </div>
                  <div className="footer-info-content-images-block">
                    <img src="/public/assets/svg/wk.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </footer>
  );
}

export default Footer;

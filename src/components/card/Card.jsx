import React from "react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/carditem" className="card">
      <div className="card-image-info">
        <div className="card-image">
          <img src="/public/assets/svg/1.webp" alt="" />
        </div>
        <button className="card-image-info-heart">
          <img src="/public/assets/svg/heart.svg" alt="" />
        </button>
        <div className="card-image-info-good-price">
          <p className="image-p-1">-27%</p>
          <p className="image-span">
            <img src="/public/assets/svg/like.svg" alt="" /> ХОРОШАЯ ЦЕНА
          </p>
          <p className="image-p-2">НГ НА ВБ</p>
        </div>
      </div>
      <div className="card-price-info">
        <div className="card-price">
          <span>
            <img src="/public/assets/svg/togolok.svg" alt="" />
            370 сом
          </span>
          <p>323 сом</p>
        </div>
        <h2>
          <span className="card-price-span-1">IKT</span>
          <span className="card-price-span-2">/Bock для волосddddddddddsdddddddddddddddddddddddddddd</span>
        </h2>
      </div>
      <div className="card-button-info">
        <p>
          <span className="card-button-info-span-1">
            <img src="/public/assets/svg/stark.svg" alt="" />
            4,8

          </span>
          <span className="card-button-info-span-2">10 949 оценок</span>
        </p>
        <button>
          <Link>
          <SlBasket />
          В корзину
          </Link>
        </button>
      </div>
    </Link>
  );
}

export default Card;

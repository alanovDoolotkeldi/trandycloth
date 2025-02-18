import React, { useState } from "react";
import Card from "../card/Card";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import BasketTotal from "../basketTotal/BasketTotal";
import BasketItem from "../basketItem/BasketItem";

function BasketItems() {
  const [open, isOpen] = useState(true);
  return (
    <div className="basket-wrapper">
      <div className="basket-items">
        <div className="basket-content">
          <div className="basket-contend-cards basket-items-section">
            <h2>Корзина</h2>
            <span
              className="basket-contend-cards-map"
              onClick={() => isOpen(!open)}
            >
              <p>2 тавара</p>
              <SlArrowDown className={`SlArrowDown ${open && "!rotate-180"}`} />
            </span>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className={`basket-contend-elements overflow-hidden`}>
                <div className="basket-contend-elements-map">
                  <BasketItem />
                  <BasketItem />
                </div>
              </div>
            </div>
          </div>
          <div className="delivery-method basket-items-section">
            <h1> Способ доставки</h1>
            <span>
              <Link>Выбрать адрес доставки ,</Link>
            </span>
          </div>
          <div className="basket-contend-blocks">
            <div className="basket-contend-block basket-items-section">
              <h1> Способ оплаты</h1>
              <span>
                <Link>Войти или зарегистрироваться ,</Link>
                чтобы выбрать способ оплаты
              </span>
            </div>
            <div className="basket-contend-block basket-items-section">
              <h1> Мои данные</h1>
              <span>
                <Link>Войти или зарегистрироваться ,</Link>
                чтобы оформить заказ
              </span>
            </div>
          </div>
        </div>
        <div>
          <BasketTotal />
        </div>
      </div>
      {/* <div className="wrapper basket-items-section mt-8">
        вы посмотрели
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div> */}
    </div>
  );
}

export default BasketItems;

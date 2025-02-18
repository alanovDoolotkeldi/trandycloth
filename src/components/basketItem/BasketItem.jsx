import React from "react";
import ProductPrice from "../ProductPrice/ProductPrice";
import { Link } from "react-router-dom";
import BasketCounter from "../basketCounter/BasketCounter";
import Heart_Delete_buttons from "../../ui/Heart_Delete_buttons";
function BasketItem() {
  return (
    <div className="basket-item">
      <div className="basket-item-container">
        <div className="basket-item-contend">
          <div className="basket-item-image">
            {/* <img src="/public/assets/images/02.webp" alt="" /> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
              alt=""
            />
          </div>
          <div className="basket-item-intranction">
            <ProductPrice />
            <Link><span>Ирригатор для зубов портативный, Health Body</span></Link>
            <div className="basket-item-intranction-p">
              <p>черный</p>
            </div>
            <div className="basket-item-intranction-p">
              <p>14 февраля</p>
            </div>
            <Heart_Delete_buttons/>
          </div>
        </div>
        <div>
          <BasketCounter/>
        </div>
        <div className="w-[181px] hidden lg:flex">
          <ProductPrice/>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;

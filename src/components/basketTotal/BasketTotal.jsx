import React from "react";
import { IoCheckbox } from "react-icons/io5";
import { Link } from "react-router-dom";

function BasketTotal() {
  return (
    <div className="basket-items-total basket-items-section">
      <div className="basket-items-total-price-link">
        <Link>Выбрать адрес доставки</Link>
      </div>
      <div className="basket-items-total-top">
        <div className="basket-items-total-price-1 basket-items-total-price">
          <p> Товары, 2 шт.</p>
          <p>7 566 сом</p>
        </div>
        <div className="basket-items-total-price">
          <p>Моя скидка</p>
          <p>−467 сом</p>
        </div>
        <div className="basket-items-total-price-3 basket-items-total-price">
          <p className="basket-price-p-3">Итого</p>
          <p className="basket-price-p-3">7 099 сом</p>
        </div>
      </div>
      <div className="basket-item-total-button">
        <button>Заказать</button>
      </div>
      <div className="basket-items-total-checbox-info">
        <div className="basket-items-total-chekbox">
          <IoCheckbox className="IoCheckbox" />
        </div>

        <span>
          Соглашаюсь с{" "}
          <a
            href="/services/pravila-polzovaniya-torgovoy-ploshchadkoy"
            target="_blank"
          >
            {" "}правилами пользования торговой площадкой{" "}
          </a>{" "}
          и{" "}
          <a href="/services/vozvrat-tovara" target="_blank">
            возврата
          </a>
        </span>
      </div>
      <div className="basket-items-total-stop">
      <div className="basket-items-total-chekbox">
          <img src="/public/assets/images/image02.svg" alt="" />
        </div>
        <span>Для получения заказа может потребоваться документ, удостоверяющий личность</span>
      </div>
    </div>
  );
}

export default BasketTotal;

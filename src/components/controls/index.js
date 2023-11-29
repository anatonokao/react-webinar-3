import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";

function Controls({openCart, cart}) {

  const itemsCount = `${cart.length} ${plural(cart.length, {
    one: 'товар',
    few: 'товара',
    many: 'товаров'
  })}`;

  const priceSum = cart.reduce((sum, item) => sum += item.price, 0);

  return (
    <div className='Controls'>
      <div className="Controls-cartInfo">
        В корзине: {
          cart.length 
            ? <span>
                {`${itemsCount} / ${priceSum} ₽`}
              </span> 
            : <span>пусто</span>
        }
      </div>
      <button onClick={() => openCart()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  openCart: PropTypes.func,
  cart: PropTypes.array
};

Controls.defaultProps = {
  openCart: () => {},
}

export default React.memo(Controls);

import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";

function Controls({openCart, cart}) {

  const itemsCount = cart.reduce((count, item) => count += item.count, 0)

  const itemsCountString = `${itemsCount} ${plural(itemsCount, {
    one: 'товар',
    few: 'товара',
    many: 'товаров'
  })}`;

  const priceSum = cart.reduce((sum, item) => sum += item.price * item.count, 0);

  return (
    <div className='Controls'>
      <div className="Controls-cartInfo">
        В корзине: {
          cart.length 
            ? <span>
                {`${itemsCountString} / ${priceSum} ₽`}
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
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  })).isRequired,
};

Controls.defaultProps = {
  openCart: () => {},
}

export default React.memo(Controls);

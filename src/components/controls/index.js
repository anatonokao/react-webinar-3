import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";
import {cn as bem} from '@bem-react/classname';

function Controls({openCart, cart}) {
  const cn = bem("Controls");

  const itemsCount = cart.reduce((count, item) => count += item.count, 0);

  const itemsCountString = `${itemsCount} ${plural(itemsCount, {
    one: 'товар',
    few: 'товара',
    many: 'товаров'
  })}`;

  const priceSum = cart.reduce((sum, item) => sum += item.price * item.count, 0);

  return (
    <div className={cn()}>
      <div className={cn("cartInfo")}>
        В корзине: {
          cart.length 
            ? <span>
                {`${itemsCountString} / ${priceSum} ₽`}
              </span> 
            : <span>пусто</span>
        }
      </div>
      <button onClick={openCart}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  openCart: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  })).isRequired,
};

Controls.defaultProps = {
  openCart: () => {},
  cart: []
}

export default React.memo(Controls);

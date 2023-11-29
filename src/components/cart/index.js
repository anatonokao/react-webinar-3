import React from "react";
import PropTypes from 'prop-types';
import Head from "../head";
import List from "../list";
import './style.css';
import {cn as bem} from '@bem-react/classname';

function Cart({cart, deleteItem, closeCart}) {
  const cn = bem("Cart");
  return (
    <div className={cn()}>
      <div className={cn("container")}>
        <Head title={"Корзина"}/>
        <button className={cn("closeBtn")} type="button" onClick={closeCart}>Закрыть</button>
        { 
          cart.length 
            ? <div className={cn("body")}>
                <List list={cart} handleBtn={deleteItem}/>
                <div className={cn("resultCost")}>Итого <span>{cart.reduce((sum, item) => sum += item.price * item.count, 0)} ₽</span></div>
              </div> 
            : <div className={cn("empty")}>Вы еще не добавляли товары в корзину</div>
        }
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  })).isRequired,
  deleteItem: PropTypes.func,
  closeCard: PropTypes.func,
};

Cart.defaultProps = {
  deleteItem: () => {},
  closeCard:() => {}
}

export default React.memo(Cart);

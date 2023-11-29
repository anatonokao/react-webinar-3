import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {cn as bem} from '@bem-react/classname';

function Item(props) {
  const cn = bem("Item");

  return (
    <div className={cn()}>
      <div className={cn("code")}>{props.item.code}</div>
      <div className={cn("title")}>{props.item.title}</div>
      <div className={cn("price")}>{props.item.price} ₽</div>
      {props.item.count && <span className={cn("countInCard")}>{props.item.count} шт</span>}
      <div className={cn("actions")}>
        <button onClick={() => props.handleBtn(props.item.code)}>
          {!props.item.count ? 'Добавить' : 'Удалить'}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number || undefined,
  }).isRequired,
  handleBtn: PropTypes.func,
};

Item.defaultProps = {
  handleBtn: () => {
  },
}

export default React.memo(Item);

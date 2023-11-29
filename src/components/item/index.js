import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {
  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{props.item.price} ₽</div>
      {props.item.countInCard && <div className='Item-countInCard'>{props.item.countInCard} шт</div>}
      <div className='Item-actions'>
        <button onClick={() => props.handleBtn(props.item.code)}>
          {!props.item.countInCard ? 'Добавить' : 'Удалить'}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
    countInCard: PropTypes.number || undefined,
  }).isRequired,
  handleBtn: PropTypes.func,
};

Item.defaultProps = {
  handleBtn: () => {
  },
}

export default React.memo(Item);

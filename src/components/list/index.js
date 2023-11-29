import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, handleBtn}) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} handleBtn={handleBtn}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number, 
    title: PropTypes.string, 
    price: PropTypes.number
  })).isRequired,
  handleBtn: PropTypes.func,
};

List.defaultProps = {
  handleBtn: () => {
  },
}

export default React.memo(List);

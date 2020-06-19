import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, total, currency, qtd, onClick}) => {

    return (
        
        
        <div className="cart-item alert alert-info">
            <span className="cart-item__name">{name}</span>            
            <span className="cart-item__qtd">{qtd}</span>
            <button className="btn btn-danger btn-xs cart-item__qtd" onClick={onClick}>X</button>
            <div className="cart-item__price">{currency}{total}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    qtd: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CartItem;

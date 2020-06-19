import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => {
    return (
        <div>
            <h3>Carrinho</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                                
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Carrinho Vázio!</div>
                        )}
                        <div className="cart__total">
                            <div>
                                Desconto: R$40,00
                            </div>
                            <div>
                                Frete: R$30,00
                            </div>
                            <div>
                                Total: {currency} {total} 
                            </div>
                                
                            <button className='btn btn-primary' style={{margin: "10px"}}>
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart } = this.props;
        addToCart(id);
    }
    
    render() {

        const { name, price, currency, image, parcel, qtdparcel } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
        <div className="product__price">{currency} {price} ou {qtdparcel}x de {parcel}</div>
                    <div className="product__button-wrap">
                        <button
                            className='btn btn-primary'
                            onClick={this.handleClick}
                        >
                            Adicionar +
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    addToCart: PropTypes.func.isRequired,
}

export default Product;

import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };

     React.useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div>
            <div className="cart">
              <input type="text"placeholder="Search" value={searchTerm} onChange={handleChange} />
            </div>
            
            <h3>Lista</h3>
            
            <ul className="product-list">
              {searchResults.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;

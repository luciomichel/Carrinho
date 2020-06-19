import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Games</h1>
                    <div  style={{float: "right"}}>
                        <span>Comprador - Seja Bem Vindo - <a href>Sair</a> </span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default App;

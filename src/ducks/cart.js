import { getProduct } from '../ducks/products';
import { func } from 'prop-types';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'R$'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        //items: state.items.filter(id => id !== payload.productId)
        items: alterList(state, payload.productId)
    };
}

export function alterList(state, code){

    items = [];
    var items = state.items.filter(function(item) { 
        return item == code; 
    }); 

    var noitems = state.items.filter(function(item) { 
        return item !== code; 
    }); 
    
    state.items.indexOf(code);
    items.splice(0,1);

    noitems.forEach(function(item){
        items.push(item)
    });

    return items;
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {

    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    let uniqueItems;
    var items = state.cart.items.map(id => getProduct(state, { id })); 

    let code = state.cart.items[(items.length - 1)];

    uniqueItems = [...new Set(items)]; 

    uniqueItems.forEach(function(item){
        var qtd = state.cart.items.filter(function(i) { 
            return i == item.id; 
        }).length; 

        item.qtd = qtd;
        item.total = (item.price * qtd)
    })

    return uniqueItems;
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price + 30 - 40;
    }, 0);
}

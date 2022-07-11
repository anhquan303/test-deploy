import { types } from './types';

export const loadStart = () => ({
    type: types.LOAD_POST_START
});

export const loadSuccess = (products) => ({
    type: types.LOAD_POST_SUCCESS,
    payload: products,
});

export const loadFail = (error) => ({
    type: types.LOAD_POST_FAIL,
    payload: error,
});

export const addStart = (product) => ({
    type: types.ADD_PRODUCT,
    payload: product,
});


export const addFail = (error) => ({
    type: types.ADD_PRODUCT_FAIL,
    payload: error,
});

export const delProduct = (productId) => ({
    type: types.DELETE_PRODUCT,
    payload: productId
});
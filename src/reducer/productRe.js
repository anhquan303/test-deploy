import { types } from './../action/types';
import axios from 'axios';

const INITIAL_STATE = {
    loading: false,
    products: [],
    error: null
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOAD_POST_START:
            return {
                ...state,
                loading: true,
            };

        case types.LOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case types.LOAD_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };


        case types.ADD_PRODUCT:
            const res = axios.post('https://6090eb7c3847340017021f71.mockapi.io/mobile/products', action.payload);
            const newList = [...state.products];
            newList.concat(res);
            return {
                ...state,
                products: newList,
                loading: false,
            };

        case types.ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.DELETE_PRODUCT:
            axios.delete(`https://6090eb7c3847340017021f71.mockapi.io/mobile/products/${action.payload}`);
            const newList2 = [...state.products];
            const newList1 = newList2.filter((product) => {
                return product.id !== action.payload.id;
            })
            return {
                ...state,
                products: newList1,
            }
        default:
            return state;
    }
};

export default productReducer;


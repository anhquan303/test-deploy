import axios from 'axios';

export const loadData = async () =>
    await axios.get('https://6090eb7c3847340017021f71.mockapi.io/mobile/products');

//export const addProduct = async (product) =>
//    await axios.post('https://6090eb7c3847340017021f71.mockapi.io/mobile/products', product);
import { takeLatest, put, call, all, fork } from "redux-saga/effects"
import { loadSuccess, loadFail, addFail, addStart } from './../action/action';
import { loadData, addProduct } from "./../api";
import { types } from './../action/types';

function* onLoadProductsStartAsync() {
    try {
        const res = yield call(loadData);
        console.log('res', res.data)
        yield put(loadSuccess(res.data));
    } catch (error) {
        yield put(loadFail(error));
    }
}

export function* onLoadProduct() {
    yield takeLatest(types.LOAD_POST_START, onLoadProductsStartAsync);
}


//function* addProductAsync(product) {
//    try {
//        const res = yield call(addProduct(product));
//        yield put(addStart(res.data));
//    } catch (error) {
//        yield put(addFail(error));
//    }
//}

//export function* onAddProduct() {
//    yield takeLatest(types.ADD_PRODUCT, addProductAsync);
//}

export default function* rootSaga() {

    yield all(
        [
            fork(onLoadProduct),
            /*fork(onAddProduct)*/
        ]
    )
}

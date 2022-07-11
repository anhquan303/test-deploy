import React, {useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadStart, addStart, delProduct } from './../action/action';


const FetchProduct = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [cate, setCate] = ('');


    const dispatch = useDispatch();
    const fetchProduct = () => {
        dispatch(loadStart())
    }

    const state = useSelector((state) => ({ ...state.products }));

    const addProductbutton = () => {
        if (show === false) {
            setShow(true)
        } else setShow(false)
    }

    const addProduct = (event) => {
        event.preventDefault();
        const data = {
            name: event.target.productName.value,
            Price: event.target.price.value,
            Category_Id: event.target.cate.value,
        }
        dispatch(addStart(data))
    }

    const deleteP = (productId) => {
        dispatch(delProduct(productId))
    }

    const mapStatetoProps = (state) => {
        return {
            list: state.productReducer ? state.productReducer : null 
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            add: (data) => {
                dispatch(addStart(data));
            },
            delete: (dataId) => {
                dispatch(delProduct(dataId));
            }
        }
    }

    return (
        <>

            <h2>Fetch Product using saga</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category_Id</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {!state.loading && state.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.Price}</td>
                            <td>{product.Category_Id}</td>
                            <td>{product.rating}</td>
                            <td>
                                <button className="edit mx-1" title="Edit" data-toggle="tooltip"><i class="fas fa-edit"></i></button>
                                <button onClick={() => deleteP(product.id)} className="delete mx-1"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </table>
            <button className="mt-2 ml-2 border-2" onClick={fetchProduct}>Fetch Products</button>
            <button className="mt-2 ml-2 border-2" onClick={addProductbutton}>Add Product</button>

            {show ?
                <form className="mx-auto text-center w-2/3" onSubmit={addProduct} >
                    <h2>Add new Product</h2>
                    <div class="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-signature"></i></span>
                        <input type="text" className="form-control border-4" placeholder="Product's name" name="productName" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-dollar-sign"></i></span>
                        <input type="text" className="form-control border-4" placeholder="Price" name="price" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-dollar-sign"></i></span>
                        <input type="text" className="form-control border-4" placeholder="Category" name="cate" />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary login_btn" />
                    </div>
                </form>
                : null
            }

        </>
    );
};

export default FetchProduct;


import * as types from './actionTypes';
import ProductApi from '../data/ProductApi';

export function LoadProductsSuccess(products){
  return { type:types.LOAD_PRODUCTS_SUCCESS,products}
}

export function DeleteProductSuccess(id){
  return { type:types.DELETE_PRODUCT_SUCCESS,id}
}

export function UpdateProductSuccess(id,product){
  product.id=id;
  return { type : types.UPDATE_PRODUCT_SUCCESS,product}
}
export function AddProductSuccess(product){
  return { type : types.ADD_PRODUCT_SUCCESS,product}
}
export function DeleteAllProductsSuccess(products){
  return {type:types.DELETEALL_PRODUCT_SUCCESS,products}
}


export function loadProducts(){
  return function (dispatch) {
    return ProductApi.getAllProducts().then(products =>{
      dispatch(LoadProductsSuccess(products));
    }).catch(error =>{throw(error);});
  };
}

export function deleteProduct(id){
  return function(dispatch, getState) {
    return ProductApi.deleteProduct(id).then( () =>{
      dispatch(DeleteProductSuccess(id))
    }).catch(error => { throw(error);});
  };
}

export function addProduct(product){
  return function(dispatch,getState){
    return ProductApi.addProduct(product).then( product=>{
      dispatch(AddProductSuccess(product));
    }).catch(error => { throw(error);});
  };
}

export function updateProduct(id,editProduct){
  return function(dispatch, getState) {
    return ProductApi.updateProduct(id,editProduct).then( () =>{ 
      dispatch(UpdateProductSuccess(id,editProduct))
    }).catch(error => { throw(error);});
  };
}

export function deleteAllProducts(products){
  return function(dispatch,getState){
    ProductApi.deleteAll(products);
    return dispatch(DeleteAllProductsSuccess(products))
  };
}

import axios from 'axios';
import {
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL,
    GET_PRODUCT_DETAILS_RESET,
    GET_PRODUCT_DETAILS_REQUEST
} from '../constants/productConstant';

const URL = import.meta.env.VITE_API_URL;

export const getProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${URL}/products`);
        console.log(response.data);
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: response.data
        });

    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error.message
        });
    }
};

export const getProductsDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:GET_PRODUCT_DETAILS_REQUEST});
        const {data}=await axios.get(`${URL}/product/${id}`);
        dispatch({type:GET_PRODUCT_DETAILS_SUCCESS,payload:data});
    }
    catch(error){
        dispatch({type:GET_PRODUCT_DETAILS_FAIL,payload:error.message})
    }
};
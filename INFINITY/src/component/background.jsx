import '../css/background.css';
import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { Header } from "./header"
import Category from "./category";
import { Intro } from './Intro';
import { getProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux'

export const Background = () => {

    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <div className="home">
                <Header />

                <Intro />
                <div className='CardSection'>
                    <Category />
                </div>
            </div>
        </>
    );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../component/header.jsx";
import { Slide } from "./slide.jsx";
import { getProducts } from "../redux/actions/productActions.js";

export const Mens = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />
            <Slide products={products} category="menSuits" tagline="Crafted for Confidence" />
            <Slide products={products} category="menT-shirts" tagline="Casual Never Looked Better" />
            <Slide products={products} category="menShirts" tagline="Everyday Elegance" />
            <Slide products={products} category="menJeans" tagline="Denim That Defines You" />
            <Slide products={products} category="menPants" tagline="Comfort in Every Step" />
        </>
    );
};

export const Womens = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />
            <Slide products={products} category="womenLehngas" tagline="Grace in Every Detail" />
            <Slide products={products} category="womenSarees" tagline="Timeless Elegance" />
            <Slide products={products} category="womenSuits" tagline="Refined for Every Occasion" />
            <Slide products={products} category="womenSuit" tagline="Modern Elegance, Effortlessly" />
        </>
    );
};

export const Kids = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />
            <Slide products={products} category="kidsBoy" tagline="Made for Little Adventures" />
            <Slide products={products} category="kidsGirl" tagline="Playful Style, Everyday Comfort" />
        </>
    );
};

export const Accessories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />
            <Slide products={products} category="Necklace" tagline="Elegance in Every Detail" />
            <Slide products={products} category="Watch" tagline="Timeless Precision" />
            <Slide products={products} category="Bracelet" tagline="Designed to Shine" />
            <Slide products={products} category="Bags" tagline="Carry Elegance Everywhere" />
        </>
    );
};

export const Footwear = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />
            <Slide products={products} category="footwearMale" tagline="Walk Beyond Ordinary" />
            <Slide products={products} category="footwearFemale" tagline="Step Into Elegance" />
        </>
    );
};

export const Streatwear = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />
            <Slide products={products} category="streetwear1" tagline="Made for the Streets" />
            <Slide products={products} category="streetwear2" tagline="Own Your Style" />
            <Slide products={products} category="streetwear3" tagline="Where Comfort Meets Edge" />
        </>
    );
};
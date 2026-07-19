import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Typography,
    Grid,
    styled,
    Divider
} from "@mui/material";
import { getProductsDetails } from "../../redux/actions/productActions.js";
import { LeftSide } from "./LeftSideDetails.jsx";
import { Header } from '../../component/header.jsx';
import { RightSide } from "./RightSideDetails.jsx";

const Component = styled(Box)({
    background: "#f2f2f2",
    minHeight: "100vh",
    padding: "60px",
});

const RightContainer = styled(Box)({
    background: "#fff",
    padding: "24px",
    borderRadius: "8px",
});

export const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, product } = useSelector(
        state => state.getProductDetails
    );
    useEffect(() => {
        dispatch(getProductsDetails(id));
    }, [dispatch, id]);
    if (loading) {
        return (
            <Typography align="center" mt={5}>
                Loading...
            </Typography>
        );
    }

    return (
        <Component>
            <Header />
            {product && Object.keys(product).length > 0 && (

                <Grid container spacing={4}>

                    {/* Left Side */}
                    <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                        <LeftSide product={product} />
                    </Grid>

                    {/* Right Side */}
                    <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
                        <RightContainer>
                            <RightSide product={product} />
                        </RightContainer>
                    </Grid>
                </Grid>
            )}
        </Component>
    );
};
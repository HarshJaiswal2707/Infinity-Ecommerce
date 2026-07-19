import { Box, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/actions/cartAction";
import { useNavigate } from "react-router";
import { useState } from "react";
const Image = styled("img")(({ zoom }) => ({
    width: "100%",
    height: "600px",
    objectFit: "contain",
    cursor: "zoom-in",

    ...(zoom && {
        position: "fixed",
        top: "54%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "93vw",
        height: "95vh",
        objectFit: "contain",
        zIndex: 9999,
        background: "#edeaec",
        cursor: "zoom-out",
    }),
}));


const LeftContainer = styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
`;


export const LeftSide = ({ product }) => {
    const [zoom, setZoom] = useState();
    const [quantity, setQuantity] = ('1');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addItemToCart = (id) => {
        dispatch(AddToCart(id, quantity));
        navigate('/cart')
    }

    return (
        <>
            <LeftContainer>
                <Box sx={{
                    background: "#fff",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 6
                }}>
                    <Image src={`https://infinity-ecommerce.onrender.com/${product.url}`} alt="product" zoom={zoom} onClick={() => setZoom(!zoom)} />

                </Box>
                <span>
                    <Box sx={{ display: "flex", width: "100%", mt: 3, height: 59 }}>
                        <Button variant="contained" fullWidth onClick={() => addItemToCart(product.id)}>
                            ADD TO CART
                        </Button>

                        {/* <Button
                            variant="contained"
                            fullWidth

                        >
                            BUY NOW
                        </Button> */}
                    </Box>
                </span>
            </LeftContainer>
        </>
    );
};
import { Grid, Typography, Box, styled, colors, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { CartItem } from "./cartItem.jsx";
import { AmountView } from "./amountView.jsx";
import { EmptyCart } from "./emptyCart.jsx";
import { Header } from "../../component/header.jsx";
const Container = styled(Grid)(({ theme }) => ({
    padding: "99px 135px",

    [theme.breakpoints.down("lg")]: {
        padding: "25px 60px",
    },

    [theme.breakpoints.down("md")]: {
        padding: "99px 30px",
    },

    [theme.breakpoints.down("sm")]: {
        padding: "70px",
    },
}));
const Headers = styled(Box)({
    background: "#fff",
    padding: '15px 24px',
})

export const Cart = () => {
    const { cartItems } = useSelector(state => state.cartProducts);
    return (
        <Box>
            <Header />
            {
                cartItems.length ?
                    <Container container spacing={2}>
                        <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }}>
                            <Headers>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Headers>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                        </Grid>
                        <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }}>
                            <AmountView cartItems={cartItems} />
                        </Grid>
                    </Container>
                    :
                    <div><EmptyCart /></div>
            }
        </Box>
    )
}
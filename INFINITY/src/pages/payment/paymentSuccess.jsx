import { Box, Typography, Button, styled } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Container = styled(Box)({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
});

const Card = styled(Box)({
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    width: "420px"
});

const PaymentSuccess = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetCart());
    }, [dispatch]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const reference = searchParams.get("reference");

    return (
        <Container>
            <Card>

                <CheckCircle
                    sx={{
                        fontSize: 90,
                        color: "green",
                        mb: 2
                    }}
                />

                <Typography variant="h4" fontWeight={600}>
                    Payment Successful
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    Thank you for shopping with Infinity ❤️
                </Typography>

                <Typography
                    sx={{
                        mt: 3,
                        fontWeight: 600,
                        wordBreak: "break-word"
                    }}
                >
                    Payment ID
                </Typography>

                <Typography color="text.secondary">
                    {reference}
                </Typography>

                <Button
                    variant="contained"
                    sx={{ mt: 4 }}
                    onClick={() => navigate("/")}
                >
                    Continue Shopping
                </Button>

            </Card>
        </Container>
    );
}

export default PaymentSuccess;
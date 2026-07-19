import { Typography, Box, styled, Button } from "@mui/material"
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider.jsx";
import { useNavigate } from "react-router-dom";
const Container = styled(Box)(({ theme }) => ({
  background: "#fff",
  padding: "18px",
  borderRadius: "8px",
  boxShadow: "0 1px 5px rgba(0,0,0,0.15)",
  position: "sticky",
  top: "20px",
  marginLeft: "25px",

  [theme.breakpoints.down("md")]: {
    position: "static",
    marginLeft: 0,
    marginTop: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "15px",
    borderRadius: "4px",
  },
}));
const Heading = styled(Box)(({ theme }) => ({
  color: "#878787",
  fontWeight: 600,
  paddingBottom: 12,
  borderBottom: "1px solid #e0e0e0",
  marginBottom: 15,

  "& .MuiTypography-root": {
    fontSize: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-root": {
      fontSize: "15px",
    },
  },
}));
const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 15,

  "& .MuiTypography-root": {
    fontSize: "15px",
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-root": {
      fontSize: "14px",
    },
  },
}));
const Total = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 0",
  borderTop: "1px dashed #ccc",
  borderBottom: "1px dashed #ccc",
  marginTop: 10,

  "& .MuiTypography-root": {
    fontWeight: 700,
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-root": {
      fontSize: "16px",
    },
  },
}));
const Save = styled(Typography)(({ theme }) => ({
  color: "#388e3c",
  fontWeight: 600,
  marginTop: 15,

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const AmountView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems])
  const navigate = useNavigate();
  const { account } = useContext(DataContext);
  const totalAmount = () => {
    let price = 0;
    let discount = 0;

    cartItems.forEach((item) => {
      price += item.price.mrp * item.quantity;
      discount += (item.price.mrp - item.price.cost) * item.quantity;
    });

    setPrice(price);
    setDiscount(discount);
  };
  const URL = "http://localhost:8000"
  const checkoutHandler = async (amount) => {
    if (!account) {
      alert("Please Sign In First");
      navigate("/");
      return;
    }

    const { data: keyData } = await axios.get(`${URL}/getKey`);
    const { key } = keyData;
    console.log(key);

    const { data: orderData } = await axios.post(`${URL}/payment/process`, {
      amount
    })
    const { order } = orderData;
    console.log(order);

    const options = {
      key,
      amount: amount, // Amount is in currency subunits.
      currency: 'INR',
      name: 'Acme Corp',
      description: 'Test Transaction',
      order_id: order.id, // This is the order_id created in the backend
      callback_url: `${URL}/paymentVerification`, // Your success URL
      prefill: {
        name: 'Harsh Jaiswal',
        email: 'harshjaiswal2707@gmail.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();

  }

  return (
    <Container>

      <Heading>
        <Typography fontWeight={600}>
          PRICE DETAILS
        </Typography>
      </Heading>

      <Row>
        <Typography>Price ({cartItems.length} items)</Typography>
        <Typography>₹{price}</Typography>
      </Row>

      <Row>
        <Typography>Discount</Typography>
        <Typography color="green">-₹{discount}</Typography>
      </Row>

      <Row>
        <Typography>Delivery Charges</Typography>
        <Typography>₹40</Typography>
      </Row>

      <Total>
        <Typography>Total Amount</Typography>
        <Typography>₹{price - discount + 40}</Typography>
      </Total>

      <Save>
        You will save ₹{discount - 40} on this order
      </Save>

      <Button
        variant="contained"
        fullWidth
        onClick={() => checkoutHandler(price - discount + 40)}
        sx={{
          mt: 3,
          height: "52px",
          borderRadius: "8px",
          background: "#fb641b",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": {
            background: "#e85a19",
          },
        }}
      >
        Place Order
      </Button>

    </Container>
  );
};
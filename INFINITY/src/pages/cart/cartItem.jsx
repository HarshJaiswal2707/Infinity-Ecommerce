import { Box, Button, Typography, styled, ButtonGroup, } from "@mui/material";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../../redux/actions/cartAction";
import { incrementQuantity, decrementQuantity } from "../../redux/actions/cartAction";
const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  background: "#fff",
  borderTop: "1px solid #f0f0f0",
  padding: "20px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
  },
}));

const LeftComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  flex: 1,
  marginLeft: "30px",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginTop: "20px",
    width: "100%",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: 150,
  height: 180,
  objectFit: "cover",

  [theme.breakpoints.down("sm")]: {
    width: 120,
    height: 150,
  },
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  marginTop: "20px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "15px",
  },
}));

const StyledButton = styled(Button)({
  borderRadius: "50%",
});

const Remove = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  width: "fit-content",
  fontWeight: 700,
  color: "#000",

  [theme.breakpoints.down("sm")]: {
    alignSelf: "flex-start",
  },
}));

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(RemoveFromCart(id));
  };
  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };
  return (
    <Component>
      <LeftComponent>
        <Image
          src={`http://localhost:8000${item.url}`}
          alt={item.title}
        />

        <StyledButtonGroup>
          <StyledButton onClick={handleDecrement}>-</StyledButton>
          <Button disabled>{item.quantity}</Button>
          <StyledButton onClick={handleIncrement}>+</StyledButton>
        </StyledButtonGroup>
      </LeftComponent>

      <RightComponent>
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 18 },
            fontWeight: 500,
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            color: "#878787",
            fontSize: 14,
            mt: 1,
          }}
        >
          Seller: RetailNet
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mt: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, sm: 28 },
              fontWeight: 600,
            }}
          >
            ₹{item.price?.cost}
          </Typography>

          <Typography
            sx={{
              textDecoration: "line-through",
              color: "#878787",
            }}
          >
            ₹{item.price?.mrp}
          </Typography>

          <Typography
            sx={{
              color: "green",
              fontWeight: 600,
            }}
          >
            {item.discount}
          </Typography>
        </Box>

        <Remove onClick={() => removeItemFromCart(item.id)}>
          REMOVE
        </Remove>
      </RightComponent>
    </Component>
  );
};
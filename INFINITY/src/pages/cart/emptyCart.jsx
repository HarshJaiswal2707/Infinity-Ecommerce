import { Box, styled } from "@mui/material";
import { Header } from "../../component/header";

const Container = styled(Box)({
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/assets/EmptyCart.png")',
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#e7e7e7",  // side me white space rahegi
    zIndex: 1000,
});

export const EmptyCart = () => {
    return (
        <>        <Header />
            <Container />
        </>
    )
};
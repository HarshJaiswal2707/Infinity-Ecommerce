import { InputBase, Box, InputAdornment, Typography } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Categories } from "../constants/categories";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "../pages/cart/emptyCart";
export const Search = () => {
    const navigate = useNavigate();

    const products = useSelector((state) => state.getProducts.products);
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value.trim() === "") {
            setSuggestions([]);
            return;
        }
        const resultedItems = products.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(resultedItems);
    };
    const searchProduct = () => {
        const category = Categories.find(
            (cat) =>
                cat.title.toLowerCase() === search.trim().toLowerCase()
        );

        if (category) {
            navigate(`/category/${category.id}`);
        }
    };
    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                position: "relative",
            }}
        >
            <InputBase
                sx={{
                    backgroundColor: "white",
                    width: "400px",
                    height: "35px",
                    borderRadius: 1,
                    pl: 2,
                }}
                placeholder="Search for products, brands and more"
                value={search}
                onChange={handleSearch}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        searchProduct();
                    }
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon
                            sx={{ cursor: "pointer", mr: 1 }}
                            onClick={searchProduct}
                        />
                    </InputAdornment>
                }
            />

            {suggestions.length > 0 && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "40px",
                        width: "400px",
                        background: "#fff",
                        color: "black",
                        boxShadow: 3,
                        borderRadius: 1,
                        zIndex: 1000,
                    }}
                >
                    {suggestions.slice(0, 6).map((product) => (
                        <Typography
                            key={product.id}
                            sx={{
                                p: 1.5,
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                            onClick={() => {
                                setSearch(product.title);
                                setSuggestions([]);
                                navigate(`/product/${product.id}`);
                            }}
                        >
                            {product.title}
                        </Typography>
                    ))}
                </Box>
            )}

            <Button
                color="inherit"
                variant="outlined"
                sx={{
                    color: "white",
                    borderRadius: 2,
                    ml: 3,
                }}
                onClick={() => navigate("/cart")}
            >
                CART
            </Button>
        </Box>
    );
};
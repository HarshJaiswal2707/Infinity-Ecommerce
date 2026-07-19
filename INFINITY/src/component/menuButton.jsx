import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import {
    Box,
    Typography,
    InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Profile } from "./profile";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Categories } from "../constants/categories";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 250,
        color: "rgb(55,65,81)",
        boxShadow:
            "rgba(0,0,0,0.05) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 10px 15px -3px",
    },
}));

export default function CustomizedMenus({
    openDialog,
    account,
    setAccount,
}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    const products = useSelector(
        (state) => state.getProducts.products || []
    );

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
            product.title
                .toLowerCase()
                .includes(value.toLowerCase())
        );

        setSuggestions(resultedItems);
    };

    const searchProduct = () => {

        const category = Categories.find(
            (cat) =>
                cat.title.toLowerCase() ===
                search.trim().toLowerCase()
        );

        if (category) {
            navigate(`/category/${category.id}`);
        }

        setSuggestions([]);
    };
    return (
        <div>
            <Button
                color="inherit"
                variant="outlined"
                sx={{ color: "white", borderRadius: 1 }}
                onClick={handleClick}
            >
                Explore
            </Button>

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disableRipple sx={{ display: "block" }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search..."
                        variant="outlined"
                        value={search}
                        onChange={handleSearch}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchProduct();
                            }
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon
                                            sx={{ cursor: "pointer" }}
                                            onClick={searchProduct}
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    {search !== "" && (
                        <Box
                            sx={{
                                mt: 1,
                                maxHeight: 250,
                                overflowY: "auto",
                                border: "1px solid #ddd",
                                borderRadius: 1,
                                bgcolor: "#fff",
                            }}
                        >
                            {suggestions.length > 0 ? (
                                suggestions.slice(0, 5).map((product) => (
                                    <Box
                                        key={product.id}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            p: 1,
                                            cursor: "pointer",
                                            "&:hover": {
                                                bgcolor: "#f5f5f5",
                                            },
                                        }}
                                        onClick={() => {
                                            setSearch(product.title);
                                            setSuggestions([]);
                                            handleClose();
                                            navigate(`/product/${product.id}`);
                                        }}
                                    >
                                        <Typography variant="body2">
                                            {product.title}
                                        </Typography>
                                    </Box>
                                ))
                            ) : (
                                <Typography
                                    sx={{
                                        p: 2,
                                        textAlign: "center",
                                        color: "gray",
                                    }}
                                >
                                    No Products Found
                                </Typography>
                            )}
                        </Box>
                    )}
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    Cart
                </MenuItem>

                <Divider />

                {account ? (
                    <MenuItem disableRipple>
                        <Profile
                            account={account}
                            setAccount={setAccount}
                        />
                    </MenuItem>
                ) : (
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            openDialog();
                        }}
                    >
                        Sign in
                    </MenuItem>
                )}
            </StyledMenu>
        </div>
    );
}
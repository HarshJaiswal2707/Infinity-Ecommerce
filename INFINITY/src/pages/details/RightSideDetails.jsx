import { Typography, Box, Divider, Table, TableBody, TableRow, TableCell } from "@mui/material"
import { DetailProducts } from "./detailProducts"
import { Card } from "@mui/material"
export const RightSide = ({ product }) => {
    return (
        <>
            {/* Title */}
            <Typography
                variant="h4"
                fontWeight={500}
            >
                {product.title}
            </Typography>

            {/* Rating */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 1,
                    mb: 2
                }}
            >
                <Typography
                    sx={{
                        background: "#388e3c",
                        color: "#fff",
                        px: 1,
                        borderRadius: "6px",
                        fontSize: 14,
                        fontWeight: 600
                    }}
                >
                    {product.rating || 4.3} ★
                </Typography>

                <Typography color="text.secondary">
                    {product.reviews || 1200} Ratings &
                    {" "}
                    {Math.floor((product.reviews || 1200) / 10)}
                    {" "}
                    Reviews
                </Typography>
            </Box>

            <Divider />

            {/* Price */}

            <Typography
                sx={{
                    color: "green",
                    mt: 3,
                    fontWeight: 600
                }}
            >
                Special Price
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={600}
                >
                    ₹{product.price?.cost}
                </Typography>

                <Typography
                    sx={{
                        textDecoration: "line-through",
                        color: "gray"
                    }}
                >
                    ₹{Math.round(product.price?.mrp * 1.2)}
                </Typography>

                <Typography color="green">
                    20% Off
                </Typography>

            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Offers */}
            <Typography
                variant="h6"
                gutterBottom
            >
                Available Offers
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    mt: 2
                }}
            >
                <Card sx={{ p: 2, width: 220 }}>
                    <Typography>
                        ✔ Bank Offer <br />
                        10% Instant Discount on ICICI Bank Cards
                    </Typography>
                </Card>

                <Card sx={{ p: 2, width: 220 }}>
                    <Typography>
                        ✔ Special Price <br />
                        Get Extra ₹500 Off
                    </Typography>
                </Card>

                <Card sx={{ p: 2, width: 220 }}>
                    <Typography>
                        ✔ No Cost EMI <br />
                        Available
                    </Typography>
                </Card>

                <Card sx={{ p: 2, width: 220 }}>
                    <Typography>
                        ✔ Cashback <br />
                        up to ₹1000
                    </Typography>
                </Card>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Description */}
            <Typography
                variant="h6"
                gutterBottom
            >
                Description
            </Typography>

            <Typography color="text.secondary">
                {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <DetailProducts product={product} />
        </>
    )
}
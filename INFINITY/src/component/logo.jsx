import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
export const Logo = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 1 }} onClick={() => navigate("/")}>
            <Box
                sx={{ cursor: "pointer", fontSize: { xs: 50, lg: 44 } }}
            >
                ∞
            </Box>
            <Box>
                <Typography sx={{ fontWeight: "bold", color: "white", fontSize: 21 }}>
                    INFINITY
                </Typography>

                <Typography sx={{ fontSize: 15, color: "#ccc" }}>
                    Your Premium Store
                </Typography>
            </Box>
        </Box>
    );
};
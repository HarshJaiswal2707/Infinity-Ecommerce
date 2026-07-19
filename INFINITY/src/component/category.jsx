import * as React from "react";
import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Categories } from "../constants/categories";
import { useNavigate } from "react-router";

export default function Category() {
    const navigate = useNavigate();

    function openCategory(id) {
        navigate(`/category/${id}`)
    }
    return (
        <Box sx={{ padding: 4 }}>

            {/* Heading */}
            <Typography variant="h6" align="center" sx={{ mb: { xs: 1, sm: 2, md: 3 }, ml: { xs: 12, md: 18, lg: 13 } }} >
                Choice is yours
            </Typography>

            {/* Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr",
                        md: "1fr",
                        lg: "1fr"
                    },
                    gap: 3,
                    maxHeight: "750px",
                    overflowY: "auto",

                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                        "&::-webkit-scrollbar": { display: "none" }

                    }
                }
                }
            >
                {
                    Categories.map((item) => (
                        <Card
                            key={item.id}
                            sx={{
                                marginLeft: { xs: 12, sm: 12, md: 19, lg: 14 },
                                marginTop: { xs: 2, md: 1 },
                                height: { xs: 210, md: 220 },
                                width: { xs: 180, md: 350 },
                                borderRadius: "18px",
                                overflow: "hidden",
                            }}
                        >
                            <CardActionArea
                                onClick={() => openCategory(item.id)}
                                sx={{
                                    CardMedia: {
                                        height: 170,
                                        transition: "transform 0.4s ease",
                                    },
                                    "&:hover img": {
                                        transform: "scale(1.1)",
                                    },
                                }}

                            >
                                <CardMedia
                                    component="img"
                                    image={item.img}
                                    alt={item.title}
                                    sx={{

                                        height: 170,
                                        transition: "0.4s",
                                    }}
                                />

                                <Typography
                                    align="center"
                                    sx={{
                                        p: 2,
                                        fontWeight: 600,
                                        background: "#fff"
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Box >
    );
}

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, styled } from '@mui/material';
import { useNavigate } from "react-router";


const Image = styled("img")({
    width: "170px",
    height: "220px",
    objectFit: "cover",
});

const Card = styled(Box)`
    display:flex;
    padding: 9px;
    justify-content:center;
    text-align: center;
`;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const Component = styled(Box)`
margin-left:20px;
margin-right:20px;
margin-top:75px;
background:#F8F9FA;
`;

const Deal = styled(Box)`
font-size: 20px;
font-weight: 600;
color: #3E2723;
margin-bottom: 15px;
letter-spacing: 0.5px;
`;

export const Slide = ({ products, category, tagline }) => {
    const navigate = useNavigate();
    return (
        <Component>
            <Deal>
                <Typography>{tagline}</Typography>
            </Deal>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={false}
                dotListClass="custom-dot-list-style"
                itemClass="px-2"
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {products
                    ?.filter((product) => product.section === category)
                    .map((product) => (

                        <Card key={product.id} sx={{ cursor: "pointer" }} onClick={() => { navigate(`/product/${product.id}`) }}>
                            <Box>
                                <Image
                                    src={`https://infinity-ecommerce.onrender.com${product.url}`}
                                    alt={product.title}
                                />

                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        color: "#1F2937",
                                        minHeight: "42px"
                                    }}
                                >
                                    {product.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        color: "#111827"
                                    }}
                                >
                                    ₹{product.price.cost}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#6B7280"
                                    }}
                                >
                                    <span style={{ textDecoration: "line-through" }}>
                                        ₹{product.price.mrp}
                                    </span>

                                    <span
                                        style={{
                                            color: "#15803D",
                                            fontWeight: 600,
                                            marginLeft: "8px"
                                        }}
                                    >
                                        {product.discount}
                                    </span>
                                </Typography>
                            </Box>
                        </Card>
                    ))}

            </Carousel>
        </Component>

    );
}
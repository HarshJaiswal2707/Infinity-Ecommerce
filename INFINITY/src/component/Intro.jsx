import { Box } from "@mui/material";
export const Intro = () => {
    return (
        <>
            <Box
                className="intro"
                sx={{ display: { xs: "none", sm: "block" }, ml: { sm: 15, md: 18, lg: 1 } }}
            >
                <h1>
                    The Best <br />Look Anytime <br /> Anywhere
                </h1>
            </Box>
            <Box
                className="intro"
                sx={{ display: { xs: "block", sm: "none" }, ml: 11 }}
            >
                <h2>
                    INFINITY<br />
                </h2>
                <h6>
                    Your Premium Store
                </h6>
            </Box>
        </>
    )
}
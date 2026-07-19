import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 999,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    h4: {
      fontSize: "20px",
      "@media (min-width:900px)": {
        fontSize: "32px",
      },
    },
  },
});

export default theme;
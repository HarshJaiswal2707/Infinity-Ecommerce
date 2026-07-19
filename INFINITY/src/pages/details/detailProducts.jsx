import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Typography,
} from "@mui/material";

export const DetailProducts = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Table
        sx={{
          "& td": {
            borderBottom: "none",
            py: 1.5,
          },
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                color: "#878787",
                width: { xs: "35%", sm: "25%" },
                fontSize: { xs: 13, sm: 15 },
              }}
            >
              Delivery
            </TableCell>

            <TableCell
              sx={{
                fontWeight: 600,
                fontSize: { xs: 13, sm: 15 },
              }}
            >
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell
              sx={{
                color: "#878787",
                verticalAlign: "top",
                fontSize: { xs: 13, sm: 15 },
              }}
            >
              Seller
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  color: "#2874f0",
                  fontWeight: 600,
                  fontSize: { xs: 14, sm: 16 },
                }}
              >
                SuperComNet
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 14 },
                  mt: 1,
                }}
              >
                GST invoice available
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 14 },
                  mt: 1,
                }}
              >
                View more sellers starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table
        sx={{
          mt: 3,
          display: { xs: "none", md: "table" }, // Mobile par hide
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell colSpan={4}>
              <Typography variant="h6" fontWeight={600}>
                Why Choose This "{product.title}"
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell align="center">
              Premium Quality
              <br />
              Assured
            </TableCell>

            <TableCell align="center">
              Trendy & Elegant
              <br />
              Design
            </TableCell>

            <TableCell align="center">
              Perfect for All
              <br />
              Occasions
            </TableCell>

            <TableCell align="center">
              Loved by 1000+
              <br />
              Customers
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "grid", md: "none" },
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          mt: 3,
        }}
      >
        {[
          "Premium Quality Assured",
          "Trendy & Elegant Design",
          "Perfect for All Occasions",
          "Loved by 1000+ Customers",
        ].map((item) => (
          <Box
            key={item}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
              background: "#fafafa",
            }}
          >
            <Typography variant="body2" fontWeight={500}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};
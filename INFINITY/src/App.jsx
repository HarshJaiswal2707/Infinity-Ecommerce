import { Routes, Route } from "react-router-dom";
import { Background } from "./component/background";
import DataProvider from "./context/dataProvider";
import { Mens, Womens, Kids, Accessories, Footwear, Streatwear } from "./pages/ProductCategories";
import { Product } from "./pages/details/detailPage";
import { Cart } from "./pages/cart/cart.jsx";
import PaymentSuccess from "./pages/payment/paymentSuccess.jsx";
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Background />} />
        <Route
          path="/category/1"
          element={<Mens />}
        />
        <Route
          path="/category/2"
          element={<Womens />}
        />
        <Route
          path="/category/3"
          element={<Kids />}
        />
        <Route
          path="/category/4"
          element={<Accessories />}
        />
        <Route
          path="/category/5"
          element={<Streatwear />}
        />
        <Route
          path="/category/6"
          element={<Footwear />}
        />
        <Route
          path="/product/:id"
          element={<Product />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/paymentSuccess"
          element={<PaymentSuccess />}
        />

      </Routes>
    </DataProvider>
  );
}

export default App;
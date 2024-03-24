import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/Auth/SignUp";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orderers/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductsDetail from "./Pages/ProductsDetail/ProductsDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Ova6iBRpxF4nrcNpRuMPYG5vh7OgryxK5HJ1YBsCnRe8hstd3yaTBVaj80aPP0c1XyqvdieNs3U8siDiCrNnFFS00bC5aDAcA"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"You must log in to pay" } redirect={"/payments"}>

            <Elements stripe={stripePromise}>
              <Payment />
              </Elements>
              </ProtectedRoute>
          }
        />
        <Route path="/orders" element={
          
          <ProtectedRoute
            msg={"You must log in to see your orders"}
            redirect={"/orders"}>

           < Orders />
              </ProtectedRoute>
          
          } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;

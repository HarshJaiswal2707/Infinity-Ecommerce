import express from "express";
import { userSignup, userlogin } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/productsController.js";
import { getKey, processPayment, paymentVerification } from "../controller/paymentController.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userlogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post("/payment/process", processPayment);
router.get("/getKey", getKey);
router.post("/paymentVerification", paymentVerification);

export default router;
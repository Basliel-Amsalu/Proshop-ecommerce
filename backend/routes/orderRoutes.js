import express from "express";
import {
  addOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateToDelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
// import products from "../data/products.js";

const router = express.Router();

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);

router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, admin, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateToDelivered);

export default router;

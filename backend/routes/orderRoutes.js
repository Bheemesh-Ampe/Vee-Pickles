const verifyToken = require("../middleware/authMiddleware");
const sendOrderEmail = require("../emailService");
const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Create Order
router.post("/", async (req, res) => {
  try {
    console.log("ORDER RECEIVED:", req.body);

    const order = new Order(req.body);

    // Save order in MongoDB
    await order.save();

    console.log("ORDER SAVED:", order._id);

    // Email temporarily disabled
    console.log("Email service disabled");

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Order Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get All Orders
router.get("/", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update Order Status
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete Order
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Order deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
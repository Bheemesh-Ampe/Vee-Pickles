require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOrderEmail = async (order) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "🛒 New Vee Pickles Order",
    text: `
Customer: ${order.customerName}
Phone: ${order.phone}
Address: ${order.address}
Product: ${order.product}
Quantity: ${order.quantity}
    `,
  });
};

module.exports = sendOrderEmail;
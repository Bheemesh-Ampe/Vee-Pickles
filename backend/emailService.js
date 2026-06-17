require("dotenv").config();

const { Resend } = require("resend");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const sendOrderEmail = async (order) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_USER,
    subject: "🛒 New Vee Pickles Order",
    html: `
      <h2>New Order Received</h2>

      <p><b>Customer:</b> ${order.customerName}</p>
      <p><b>Phone:</b> ${order.phone}</p>
      <p><b>Address:</b> ${order.address}</p>
      <p><b>Product:</b> ${order.product}</p>
      <p><b>Quantity:</b> ${order.quantity}</p>
    `,
  });
};

module.exports = sendOrderEmail;
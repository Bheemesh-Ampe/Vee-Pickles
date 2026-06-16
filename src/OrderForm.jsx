import { useState } from "react";
import "./OrderForm.css";

function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    product: "",
    quantity: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Order placed successfully!");

        setFormData({
          customerName: "",
          phone: "",
          address: "",
          product: "",
          quantity: "",
        });
      } else {
        setMessage("❌ Failed to place order");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server Error");
    }
  };

  return (
    <div id="order-form" className="order-container">
      <h2>Place Your Order</h2>

      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          name="customerName"
          placeholder="Full Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">Select Pickle</option>
          <option>Chicken Pickle</option>
          <option>Chicken Gongura Pickle</option>
          <option>Mutton Pickle</option>
          <option>Mutton Gongura Pickle</option>
        </select>

        <input
  type="number"
  name="quantity"
  placeholder="Enter Quantity (Kg)"
  value={formData.quantity}
  onChange={handleChange}
  min="0.25"
  step="0.25"
  required
/>

        <button type="submit">
          Place Order
        </button>
      </form>

      {message && (
        <p className="message">
          {message}
        </p>
      )}
    </div>
  );
}

export default OrderForm;
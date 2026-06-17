import { API_URL } from "./config";
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response =  await fetch(
  `${API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

     console.log("Status:", response.status);

const data = await response.json();

console.log("Response:", data);

setLoading(false);

      if (data.success) {
        setMessage(
  "✅ Order placed successfully! We will contact you shortly."
);

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
      setLoading(false);
  console.error("FULL ERROR:", error);
  setMessage("❌ Server Error");
}
  };

return (
  <div id="order-form" className="order-container">
    <h2>Place Your Order</h2>

    <form
      onSubmit={handleSubmit}
      className="order-form"
    >
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
        <option value="">
          Select Pickle
        </option>

        <option>
          Chicken Pickle
        </option>

        <option>
          Chicken Gongura Pickle
        </option>

        <option>
          Mutton Pickle
        </option>

        <option>
          Mutton Gongura Pickle
        </option>
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

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "⏳ Processing Order..."
          : "Place Order"}
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
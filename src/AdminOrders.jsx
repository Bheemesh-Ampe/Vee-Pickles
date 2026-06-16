import "./AdminOrders.css";
import { useEffect, useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
   const res = await fetch(
  "http://localhost:5000/api/orders",
  {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  }
);
    const data = await res.json();

    if (data.success) {
      setOrders(data.orders);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const markDelivered = async (id) => {
    await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "PUT",
      headers: {
  "Content-Type": "application/json",
  authorization: localStorage.getItem("token"),
},
      body: JSON.stringify({
        status: "Delivered",
      }),
    });

    fetchOrders();
  };


  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this order?"
    );

    if (!confirmDelete) return;

   await fetch(`http://localhost:5000/api/orders/${id}`, {
  method: "DELETE",
  headers: {
    authorization: localStorage.getItem("token"),
  },
});
    fetchOrders();
  };
  

  return (
    <div className="admin-container">
      

    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/admin";
      }}
      style={{
        marginBottom: "20px",
        padding: "10px 20px",
        background: "#d62828",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Logout
    </button>

      <h1>📦 Vee Pickles Orders</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Date</th>
  <th>Time</th>
  <th>Customer</th>
  <th>Phone</th>
  <th>Product</th>
  <th>Quantity</th>
  
  <th>Status</th>
  <th>Actions</th>
</tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
  {new Date(order.createdAt).toLocaleDateString()}
</td>

<td>
  {new Date(order.createdAt).toLocaleTimeString()}
</td>
              <td>{order.customerName}</td>
              <td>{order.phone}</td>
              <td>{order.product}</td>
              <td>{order.quantity} Kg</td>

              

              <td>
                <span
                  style={{
                    color:
                      order.status === "Delivered"
                        ? "green"
                        : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {order.status}
                </span>
              </td>

              <td>
                {order.status !== "Delivered" && (
                  <button
                    onClick={() =>
                      markDelivered(order._id)
                    }
                  >
                    ✅ Deliver
                  </button>
                )}

                <button
                  onClick={() =>
                    deleteOrder(order._id)
                  }
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
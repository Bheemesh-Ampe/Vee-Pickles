import OrderForm from "./OrderForm";

function OrderPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Place Your Order
      </h1>

      <OrderForm />
    </div>
  );
}

export default OrderPage;
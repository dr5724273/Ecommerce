import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} x {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
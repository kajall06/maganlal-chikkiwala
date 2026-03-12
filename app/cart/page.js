"use client"

import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, clearCart } from "@/store/slice/cartSlice"

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return <div className="text-center py-20 text-xl">Your cart is empty</div>
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div className="flex items-center gap-4">
              <img
                src={Array.isArray(item.images) ? item.images[0] : item.images}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ₹{totalPrice}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-6 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}
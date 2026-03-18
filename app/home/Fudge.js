"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/store/slice/cartSlice"
import Link from "next/link"
import { IoEyeSharp, IoAdd } from "react-icons/io5"

export default function Fudge() {
  const [products, setProducts] = useState([])
  const [toast, setToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [activeId, setActiveId] = useState(null) // ✅ NEW
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=2"
      )
      setProducts(res.data.slice(0, 8))
    }

    fetchData()
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    setToastMessage(`${product.title} added to cart!`)
    setToast(true)

    setTimeout(() => {
      setToast(false)
    }, 2000)
  }

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-5 bg-green-500 text-white px-5 py-3 rounded shadow-lg z-50 animate-slide-in">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between bg-white border-t-2 border-[#e9597e] mb-8 rounded-t-sm mt-5">
        <div>
          <h3 className="text-base text-white uppercase bg-[#e9597e] px-6 py-3 m-0">
            Diwali Hamper
          </h3>
        </div>

        <div className="mt-3 sm:mt-0">
          <ul className="flex flex-wrap gap-2 sm:gap-4 p-3">
            <li className="text-[#e9597e]">Latest Products</li>
            <li className="text-[#e9597e]">Best Selling</li>
            <li className="text-[#e9597e]">Top Rating</li>
            <li className="text-[#e9597e]">Featured Products</li>
          </ul>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#f1f1f1]">
        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl px-4 gap-6">

          {/* Left Banner */}
          <div className="w-full lg:w-1/4 h-[350px] lg:h-[550px] mt-12">
            <img src="/fudge.jpg" className="w-full h-full object-contain" />
          </div>

          {/* ✅ Mobile = 1 column */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">

            {products.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  setActiveId(activeId === product.id ? null : product.id)
                }
                className="group bg-white relative overflow-hidden shadow hover:shadow-lg cursor-pointer"
              >

                <img
                  src={Array.isArray(product.images) ? product.images[0] : product.images}
                  alt={product.title}
                  className="w-full h-[180px] object-cover"
                />

                {/* ✅ Tap + Hover */}
                <div
                  className={`absolute inset-0 flex justify-end items-start pt-3 pr-3 transition duration-300
                  ${
                    activeId === product.id
                      ? "opacity-100"
                      : "opacity-0"
                  }
                  lg:opacity-0 lg:group-hover:opacity-100`}
                >
                  <div className="flex flex-col gap-2">

                    {/* View */}
                    <Link href={`/shop/diwali/${product.id}`}>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white px-3 py-2 text-sm shadow rounded"
                      >
                        <IoEyeSharp />
                      </button>
                    </Link>

                    {/* Add */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToCart(product)
                      }}
                      className="bg-red-500 text-white px-3 py-2 text-sm rounded"
                    >
                      <IoAdd />
                    </button>

                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-3 p-5">
                  <h3 className="text-sm text-gray-700">{product.title}</h3>
                  <div className="border-b border-red-500 my-2"></div>
                  <p className="text-sm font-medium text-red-500">
                    ₹{product.price}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.3s ease-in-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
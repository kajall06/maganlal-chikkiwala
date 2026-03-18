"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/store/slice/cartSlice"
import Link from "next/link"
import PageBanner from "@/components/PageBanner"

export default function CategoryPage({ params }) {
  const { category } = params
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState("")

  // Map category names to category IDs
  const categoryMap = {
      dryfruitroll:4,
    chikki: 1,
    fudge: 2,
    namkeen:5
  }
  const category_id = categoryMap[category.toLowerCase()] || 1

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products for this category
        const res = await axios.get(
          `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${category_id}`
        )
        setProducts(res.data)

        // Fetch banner (if any)
        const bannerRes = await axios.get(
          "https://appy.trycatchtech.com/v3/maganlalchikki/about"
        )
        setBanner(bannerRes.data[0]?.image || "")
      } catch (error) {
        console.error("Error fetching category products:", error)
      }
    }

    fetchData()
  }, [category_id])

  if (products.length === 0) {
    return <div className="text-center py-20 text-xl">No products found in this category</div>
  }

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      {/* Page Banner */}
      <PageBanner title={category} image={banner}></PageBanner>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white relative overflow-hidden shadow hover:shadow-lg rounded"
          >
            {/* Product Image */}
            <img
              src={Array.isArray(product.images) ? product.images[0] : product.images}
              alt={product.title}
              className="w-full h-[180px] object-cover"
            />

            {/* Hover Buttons */}
            <div className="absolute inset-0 flex justify-end items-start pt-3 pr-3 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex flex-col gap-2">
                <Link href={`/shop/${category}/${product.id}`}>
                  <button className="bg-white px-3 py-2 text-sm shadow rounded">View</button>
                </Link>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-red-500 text-white px-3 py-2 text-sm rounded"
                >
                  Add
                </button>
                <button className="bg-white px-3 py-2 shadow rounded">❤️</button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-3 p-5">
              <h3 className="text-sm text-gray-700">{product.title}</h3>
              <div className="border-b border-red-500 my-2"></div>
              <p className="text-sm font-medium text-red-500">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
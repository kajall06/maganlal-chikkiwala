"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/store/slice/cartSlice"
import PageBanner from "@/components/PageBanner"

export default function ShopPage() {

  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState("")
  const [category, setCategory] = useState("chikki")

  const [toast, setToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const dispatch = useDispatch()

  const categoryMap = {
    chikki: 1,
    fudge: 2,
    diwali: 2
  }

  const category_id = categoryMap[category] || 1


  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const productRes = await axios.get(
          `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${category_id}`
        )

        setProducts(productRes.data)

        const bannerRes = await axios.get(
          "https://appy.trycatchtech.com/v3/maganlalchikki/about"
        )

        setBanner(bannerRes.data[0]?.image || "")

      } catch (error) {
        console.log(error)
      }

    }

    fetchProducts()

  }, [category_id])


  const handleAddToCart = (product) => {

    dispatch(addToCart(product))

    setToastMessage(`${product.title} added to cart`)
    setToast(true)

    setTimeout(() => {
      setToast(false)
    }, 2000)

  }


  return (
    <div className="bg-[#f1f1f1] min-h-screen">


      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-5 bg-green-500 text-white px-5 py-3 rounded shadow-lg z-50">
          {toastMessage}
        </div>
      )}


    


      {/* Banner */}
      <PageBanner
        title={category.charAt(0).toUpperCase() + category.slice(1)}
        image={banner}
      />



        {/* Category Buttons */}
      <div className="flex justify-center gap-4 ">

        {Object.keys(categoryMap).map((cat) => (

          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded font-semibold ${
              category === cat
                ? "bg-red-500 text-white"
                : "bg-white text-red-500 border border-red-500"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>

        ))}

      </div>


      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white shadow rounded overflow-hidden"
          >

            {/* Image */}
            <img
              src={
                Array.isArray(product.images)
                  ? product.images[0]
                  : product.images
              }
              alt={product.title}
              className="w-full h-[200px] object-cover"
            />


            {/* Product Info */}
            <div className="p-5">

              <h3 className="text-sm text-gray-700">
                {product.title}
              </h3>

              <div className="border-b border-red-500 my-2"></div>

              <p className="text-sm font-medium text-black-500 mb-4">
                ₹{product.price}
              </p>


              {/* Add To Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
import axios from "axios"
import PageBanner from "@/components/PageBanner"

export default async function ProductPage({ params }) {
//   const { category, id } =  params  // Get dynamic params from URL
 const id = (await params).id
 const category= (await params).category
 console.log(id)
 console.log(category)
  // Map category name to category_id
  const categoryMap = {
      dryfruitroll:4,
    chikki: 1,
    fudge: 2,
    namkeen:5
  }
  const category_id = categoryMap[category.toLowerCase()] || 1

  // Fetch banner (about) and product list in parallel
  const [bannerRes, productRes] = await Promise.all([
    axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/about"),
    axios.get(`https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${category_id}`)
  ])

  const bannerData = bannerRes.data[0]?.image || ""  // First banner image
  const products = productRes.data || []

  // Find the product by ID
  const product = products.find(p => p.id.toString() === id)
  console.log(product)
  if (!product) {
    return <div className="text-center py-20 text-xl font-semibold">Product not found</div>
  }

  return (
    <div className="">
      {/* Page Banner */}
      <PageBanner title="Shop" image={bannerData} />

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-10 mt-5 max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <img
            src={Array.isArray(product.images) ? product.images[0] : product.images}
            alt={product.title}
            className="w-[100px] md:w-full rounded-lg shadow mb-5"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-red-500 text-xl font-semibold">₹{product.price}</p>
          <p className="text-gray-600">{product.full_description}</p>
        </div>
      </div>
    </div>
  )
}
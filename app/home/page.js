import axios from "axios"
import Link from "next/link"
import { slugify } from "@/utils/slugify"
import Carousel from "./Carousel"
import Diwali from "./Diwali"
import Chikki from "./Chikki"
import Fudge from "./Fudge"

export default async function Page() {
  const res = await axios.get(
    "https://appy.trycatchtech.com/v3/maganlalchikki/home_image_gallery"
  )

  const response = await axios.get(
    "https://appy.trycatchtech.com/v3/maganlalchikki/banner_image"
  )
  const products = response.data

  return (
    <>
      <Carousel slides={res.data} />

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => {
          const slug = slugify(product.title)
          return (
           
              <div  key={product.id}className="group relative cursor-pointer">
                <img
                  alt={product.title}
                  src={product.banner_image}
                  className="w-full h-48 sm:h-52 lg:h-50 object-contain rounded-md opacity-70"
                />
               
              </div>
         
          )
        })}
      </div>

      <Diwali />
      <Chikki />
      <Fudge />
    </>
  )
}
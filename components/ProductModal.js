"use client"

import { Dialog } from "@headlessui/react"

export default function ProductModal({ open, setOpen, product }) {

  if (!product) return null

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">

      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

        <Dialog.Panel className="bg-white p-6 rounded w-[400px]">

          <img
            src={product.images}
            className="w-full h-[200px] object-cover"
          />

          <h2 className="text-lg font-bold mt-3">
            {product.title}
          </h2>

          <p className="text-red-500 font-semibold">
            ₹{product.price}
          </p>

          <button
            onClick={() => setOpen(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2"
          >
            Close
          </button>

        </Dialog.Panel>

      </div>

    </Dialog>
  )
}
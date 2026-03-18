'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { ShoppingCart } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Shop', href: '/shop' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const cartItems = useSelector(state => state.cart.items)
  const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)
  const pathname = usePathname()

  // Listen to scroll to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'}`}>
      {/* Top Offer Bar */}
      <div className={`text-white text-sm text-center py-2 font-semibold transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'bg-red-500'}`}>
        Special Offer: Free shipping on orders above ₹500!
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/image1.png" alt="Maganlal Chikki" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-sm transition ${
                  isActive ? 'text-red-500' : 'text-gray-900 hover:text-red-500'
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          {/* Search */}
          
        </div>

        {/* Right Section: Login + Cart */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#" className="font-semibold text-gray-900 hover:text-red-500">
            Log in
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-900" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-72 bg-white p-6 overflow-y-auto shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <img src="/image1.png" alt="Logo" className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 p-2 rounded-md"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-4">
            {navigation.map(item => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-semibold text-sm ${
                    isActive ? 'text-red-500' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

         

          {/* Login + Cart */}
          <div className="mt-6 flex items-center justify-between">
            <Link
              href="#"
              className="px-3 py-2 rounded-md font-semibold text-gray-900 hover:bg-gray-50"
            >
              Log in
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-900" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
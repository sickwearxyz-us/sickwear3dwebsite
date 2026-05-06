"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Send } from "lucide-react"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export default function OrderForm({ isOpen, onClose, productName = "" }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productType: productName,
    quantity: "",
    eventName: "",
    eventDate: "",
    timeline: "",
    budget: "",
    requirements: "",
    designHelp: "no",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        productType: "",
        quantity: "",
        eventName: "",
        eventDate: "",
        timeline: "",
        budget: "",
        requirements: "",
        designHelp: "no",
      })
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-black border border-white/20 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-black border-b border-white/20 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Place Your Order</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                <div className="w-16 h-16 bg-[#BFF000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Order Submitted!</h3>
                <p className="text-white/70">
                  Thank you for your order request. We'll get back to you within 24 hours with a custom quote and
                  timeline.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                        Company/Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Product Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-white/80 mb-2">
                        Product Type *
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        required
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                      >
                        <option value="">Select product type</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Hoodies/Jackets">Hoodies/Jackets</option>
                        <option value="Caps/Hats">Caps/Hats</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Travel Gear">Travel Gear</option>
                        <option value="Custom Package">Custom Package</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-white/80 mb-2">
                        Estimated Quantity *
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                      >
                        <option value="">Select quantity range</option>
                        <option value="50-100">50-100 pieces</option>
                        <option value="100-250">100-250 pieces</option>
                        <option value="250-500">250-500 pieces</option>
                        <option value="500-1000">500-1000 pieces</option>
                        <option value="1000+">1000+ pieces</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Event Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventName" className="block text-sm font-medium text-white/80 mb-2">
                        Event Name
                      </label>
                      <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                        placeholder="Conference, hackathon, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-white/80 mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline & Budget */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Timeline & Budget</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                        Required Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="Rush (1-2 weeks)">Rush (1-2 weeks)</option>
                        <option value="Standard (2-3 weeks)">Standard (2-3 weeks)</option>
                        <option value="Extended (4+ weeks)">Extended (4+ weeks)</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                        <option value="Need quote">Need quote</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Additional Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="designHelp" className="block text-sm font-medium text-white/80 mb-2">
                        Do you need design assistance?
                      </label>
                      <select
                        id="designHelp"
                        name="designHelp"
                        value={formData.designHelp}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent"
                      >
                        <option value="no">No, I have designs ready</option>
                        <option value="yes">Yes, I need design help</option>
                        <option value="partial">I have some ideas but need refinement</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-white/80 mb-2">
                        Special Requirements or Notes
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows={4}
                        value={formData.requirements}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#BFF000] focus:border-transparent resize-none"
                        placeholder="Tell us about any specific requirements, colors, materials, or other details..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BFF000] hover:bg-[#BFF000]/90 text-black font-semibold py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Submitting Order...
                      </div>
                    ) : (
                      "Submit Order Request"
                    )}
                  </Button>
                  <p className="text-white/60 text-sm text-center mt-3">
                    We'll review your request and get back to you within 24 hours with a custom quote.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

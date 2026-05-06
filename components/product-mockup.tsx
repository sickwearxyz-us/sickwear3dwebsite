"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProductMockupProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  label?: string
  personName?: string
}

export default function ProductMockup({
  src,
  alt,
  width = 300,
  height = 300,
  className = "",
  label,
  personName,
}: ProductMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {/* Product Image with Background Removal */}
        <div className="relative overflow-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
            className="relative z-0"
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="object-contain mix-blend-multiply"
              onLoad={() => setIsLoaded(true)}
              style={{
                filter: "contrast(1.2) brightness(1.1) drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.25))",
              }}
            />
          </motion.div>
        </div>

        {/* Person name tag if provided */}
        {personName && (
          <div className="absolute top-[20%] right-[-20px]">
            <div className="bg-[#86efac] text-black rounded-full px-4 py-1 text-sm">{personName}</div>
          </div>
        )}
      </div>

      {/* Product label if provided */}
      {label && <p className="text-sm text-gray-400 mt-2 text-center">{label}</p>}
    </div>
  )
}

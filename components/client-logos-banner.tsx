"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogosBanner() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller")

    // Add data-animated="true" to enable animation
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true")
    })
  }, [])

  // All client logos in a single array
  const allClientLogos = [
    // First batch
    { src: "/images/client-logos/devfolio.png", alt: "Devfolio" },
    { src: "/images/client-logos/ethglobal.png", alt: "ETHGlobal" },
    { src: "/images/client-logos/ethindia.png", alt: "ETHIndia" },
    { src: "/images/client-logos/polkadot.png", alt: "Polkadot" },
    { src: "/images/client-logos/debridge.png", alt: "deBridge" },
    { src: "/images/client-logos/safe.png", alt: "Safe" },
    { src: "/images/client-logos/story-protocol.png", alt: "Story Protocol" },
    { src: "/images/client-logos/talus-ai.png", alt: "Talus AI" },
    { src: "/images/client-logos/scroll.png", alt: "Scroll" },
    { src: "/images/client-logos/stationx.png", alt: "StationX" },

    // Second batch
    { src: "/images/client-logos/okto.png", alt: "Okto" },
    { src: "/images/client-logos/okx.png", alt: "OKX" },
    { src: "/images/client-logos/multipli.jpeg", alt: "Multipli" },
    { src: "/images/client-logos/layerzero.png", alt: "LayerZero" },
    { src: "/images/client-logos/superwomen.png", alt: "Superwomen" },
    { src: "/images/client-logos/coinbase.png", alt: "Coinbase" },
    { src: "/images/client-logos/huddle.png", alt: "Huddle01" },
    { src: "/images/client-logos/zerion.png", alt: "Zerion" },
    { src: "/images/client-logos/inco.png", alt: "INCO" },
    { src: "/images/client-logos/chromia.png", alt: "Chromia" },

    // Third batch
    { src: "/images/client-logos/fluent.png", alt: "Fluent" },
    { src: "/images/client-logos/zkemail.png", alt: "zkEmail" },
    { src: "/images/client-logos/socket.png", alt: "Socket" },
    { src: "/images/client-logos/akave.png", alt: "Akave" },
    { src: "/images/client-logos/pizzadao.png", alt: "PizzaDAO" },
    { src: "/images/client-logos/aptos.png", alt: "Aptos" },
    { src: "/images/client-logos/bitget.png", alt: "Bitget" },
    { src: "/images/client-logos/coinshift.png", alt: "Coinshift" },
    { src: "/images/client-logos/biconomy.png", alt: "Biconomy" },
  ]

  // Shuffle the array to randomize logo distribution
  const shuffledLogos = [...allClientLogos].sort(() => 0.5 - Math.random())

  // Calculate how many logos per row (roughly equal distribution)
  const totalLogos = shuffledLogos.length
  const logosPerRow = Math.ceil(totalLogos / 5)

  // Create non-overlapping sets for each row
  const firstRowLogos = shuffledLogos.slice(0, logosPerRow)
  const secondRowLogos = shuffledLogos.slice(logosPerRow, logosPerRow * 2)
  const thirdRowLogos = shuffledLogos.slice(logosPerRow * 2, logosPerRow * 3)
  const fourthRowLogos = shuffledLogos.slice(logosPerRow * 3, logosPerRow * 4)
  const fifthRowLogos = shuffledLogos.slice(logosPerRow * 4)

  const logoRowVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (direction: string) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden py-10 bg-black"
    >
      {/* Gradient overlays for fade effect on sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* First row - left to right */}
      <motion.div
        variants={logoRowVariants}
        custom="left"
        className="scroller"
        ref={scrollerRef}
        data-speed="very-slow"
        style={{ "--_animation-duration": "90s" } as React.CSSProperties}
      >
        <div className="scroller__inner">
          <div className="flex space-x-12 items-center">
            {firstRowLogos.map((logo, index) => (
              <motion.div
                key={`logo-1-${index}`}
                initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="flex-shrink-0 h-16 w-28 flex items-center justify-center"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
            {/* Repeat for seamless loop */}
            {firstRowLogos.map((logo, index) => (
              <div key={`logo-1-repeat-${index}`} className="flex-shrink-0 h-16 w-28 flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Second row - right to left */}
      <motion.div
        variants={logoRowVariants}
        custom="right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="scroller mt-6"
        data-speed="slow"
        data-direction="right"
      >
        <div className="scroller__inner">
          <div className="flex space-x-12 items-center">
            {secondRowLogos.map((logo, index) => (
              <motion.div
                key={`logo-2-${index}`}
                initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 + 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: -5 }}
                className="flex-shrink-0 h-16 w-28 flex items-center justify-center"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
            {/* Repeat for seamless loop */}
            {secondRowLogos.map((logo, index) => (
              <div key={`logo-2-repeat-${index}`} className="flex-shrink-0 h-16 w-28 flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Third row - left to right */}
      <motion.div
        variants={logoRowVariants}
        custom="left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="scroller mt-6"
        data-speed="slow"
      >
        <div className="scroller__inner">
          <div className="flex space-x-12 items-center">
            {thirdRowLogos.map((logo, index) => (
              <motion.div
                key={`logo-3-${index}`}
                initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: 3 }}
                className="flex-shrink-0 h-16 w-28 flex items-center justify-center"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
            {/* Repeat for seamless loop */}
            {thirdRowLogos.map((logo, index) => (
              <div key={`logo-3-repeat-${index}`} className="flex-shrink-0 h-16 w-28 flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Fourth row - right to left */}
      <motion.div
        variants={logoRowVariants}
        custom="right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="scroller mt-6"
        data-speed="very-slow"
        data-direction="right"
        style={{ "--_animation-duration": "90s" } as React.CSSProperties}
      >
        <div className="scroller__inner">
          <div className="flex space-x-12 items-center">
            {fourthRowLogos.map((logo, index) => (
              <motion.div
                key={`logo-4-${index}`}
                initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 + 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: -3 }}
                className="flex-shrink-0 h-16 w-28 flex items-center justify-center"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
            {/* Repeat for seamless loop */}
            {fourthRowLogos.map((logo, index) => (
              <div key={`logo-4-repeat-${index}`} className="flex-shrink-0 h-16 w-28 flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Fifth row - left to right */}
      <motion.div
        variants={logoRowVariants}
        custom="left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="scroller mt-6"
        data-speed="ultra-slow"
        style={{ "--_animation-duration": "120s" } as React.CSSProperties}
      >
        <div className="scroller__inner">
          <div className="flex space-x-12 items-center">
            {fifthRowLogos.map((logo, index) => (
              <motion.div
                key={`logo-5-${index}`}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: 2 }}
                className="flex-shrink-0 h-16 w-28 flex items-center justify-center"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
            {/* Repeat for seamless loop */}
            {fifthRowLogos.map((logo, index) => (
              <div key={`logo-5-repeat-${index}`} className="flex-shrink-0 h-16 w-28 flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={38}
                  className="max-h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

"use client"
import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
 
export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string
  words: string[]
}) {
  const [index, setIndex] = React.useState(0)
 
React.useEffect(() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % words.length)
}, 2500)
// Clean up interval on unmount
return () => clearInterval(interval)
}, [words.length])
return (
 
<div className="">
  {text}{' '}
  <AnimatePresence mode="wait">
    <motion.p
      key={words[index]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {words[index]}
    </motion.p>
  </AnimatePresence>
</div>
) }
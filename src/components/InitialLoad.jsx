import { motion, AnimatePresence } from "motion/react";
import burger from "../assets/burger.png";
import drink from "../assets/drink.png";
import fries from "../assets/fries.png";
import meal from "../assets/meal.png";
import wrap from "../assets/wrap.png";
import { useState, useEffect } from "react";

function InitialLoad() {
  const [index, setIndex] = useState(0);
  const images = [fries, burger, drink, meal, wrap];
  console.log(index);

  useEffect(() => {
    // Auto-advance every 2.5 seconds
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 800);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={[index]}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default InitialLoad;

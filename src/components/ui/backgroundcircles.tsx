import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavbarStore } from "../../stores/navbarStore";

export default function BackgroundCircles() {
  const isSticky = useNavbarStore((state) => state.isSticky);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: isSticky
        ? "linear-gradient(180deg, #84cc16 0%, #bef264 50%, #22c55e 100%)" // grün Verlauf sticky
        : "linear-gradient(180deg, #d946ef 0%, #fda4af 50%, #8b5cf6 100%)", // original pink/lila Verlauf
      transition: { duration: 1.2, ease: "easeInOut" },
    });
  }, [isSticky, controls]);

  return (
    <>
      <motion.div
        className="absolute top-[-450px] left-[-550px] w-[957px] h-[966px] rounded-full opacity-70 blur-3xl -z-20 pointer-events-none"
        style={{ filter: "blur(40px)", willChange: "filter, transform" }}
        animate={controls}
      />
      <motion.div
        className="absolute top-[550px] right-[-450px] w-[957px] h-[966px] rounded-full opacity-80 blur-3xl -z-20 pointer-events-none"
        style={{ filter: "blur(50px)", willChange: "filter, transform" }}
        animate={{
          background: isSticky
            ? "linear-gradient(225deg, #fde68a 0%, #fb923c 50%, #ef4444 100%)"
            : "linear-gradient(225deg, #ec4899 0%, #fda4af 50%, #f43f5e 100%)",
          transition: { duration: 1.2, ease: "easeInOut" },
        }}
      />
    </>
  );
}

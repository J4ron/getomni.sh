import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavbarStore } from "../../stores/navbarStore";

export default function BackgroundCircles() {
  const isSticky = useNavbarStore((state) => state.isSticky);
  const floatingNavVisible = useNavbarStore((state) => state.floatingNavVisible);
  const controls = useAnimation();

  useEffect(() => {
  controls.start({
    background: floatingNavVisible
    ? "linear-gradient(180deg, #cc1666 0%, #f264be 50%, #c5228f 100%)" 
    : "linear-gradient(180deg, #d946ef 0%, #fda4af 50%, #8b5cf6 100%)", 
    transition: { duration: 1.2, ease: "easeInOut" },
  });
  }, [isSticky, floatingNavVisible, controls]);

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
        animate={controls}
      />
    </>
  );
}

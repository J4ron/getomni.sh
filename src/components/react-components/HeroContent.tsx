import { motion } from "framer-motion";
import PulsingDot from "../ui/pulsingdot";
import { Button } from "../ui/button";

export default function AnimatedHeroContent() {

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-15 px-4 max-w-4xl mx-auto text-center" aria-label="Hero Section">
      <motion.h1
        className="text-[3.75rem] font-bold text-[#0A0A0A] leading-tight"
        style={{ lineHeight: 1.1 }}
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        Convert anything.
        <br /> Instantly. Locally.
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold text-[#0A0A0A] mt-6"
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Tired of slow web converters?
        <br />
        Omni converts files instantly
        <br />
        right on your machine
      </motion.h2>

      <motion.div
        className="justify-center mt-8"
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Button
          aria-label="Start converting files"
          size={"lg"}
        >
          Start Converting
        </Button>

        <div>
          <PulsingDot text="Trusted by 1,200 Dev's" />
        </div>
      </motion.div>
    </section>
  );
}

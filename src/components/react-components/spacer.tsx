import { motion, type Variants, easeOut } from "framer-motion";
import { AppWindowMac, CreditCard, Shredder } from "lucide-react";

const features = [
  {
    icon: <AppWindowMac color="white" width={32} height="auto" aria-hidden="true" strokeWidth={1} />,
    label: "Runs Native with your OS",
  },
  {
    icon: <Shredder color="white" width={32} height="auto" aria-hidden="true" strokeWidth={1} />,
    label: "No limits. Ever.",
  },
  {
    icon: <CreditCard color="white" width={32} height="auto" aria-hidden="true" strokeWidth={1}/>,
    label: "One-time Payment",
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Spacer() {
  return (
    <section className="mt-16 w-full z-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        style={{ touchAction: "pan-y", userSelect: "none", willChange: "transform" }}
      >
        <div className="flex justify-center p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, originX: 0.5, originY: 0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#0A0A0A] w-15 h-15 flex items-center justify-center rounded-md shadow-lg">
                  {feature.icon}
                </div>
                <h2 className="ml-6 text-lg font-medium text-[#0A0A0A]">{feature.label}</h2>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

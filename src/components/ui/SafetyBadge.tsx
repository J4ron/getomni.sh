import { ShieldIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyBadge() {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 15px rgba(128, 128, 128, 0.7)",
        transition: { duration: 0.3, ease: "easeIn" },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        flex items-center justify-center
        mt-5 px-4 py-2
        bg-gray-200
        rounded-full
        shadow-md
        ring-1 ring-gray-300
        cursor-default
        select-none
        max-w-max
        mx-auto
      "
    >
      <div className="mr-2">
        <ShieldIcon className="w-5 h-5 text-gray-600" />
      </div>
      <span className="text-sm font-medium text-gray-600">
        100% Offline & Secure
      </span>
    </motion.div>
  );
}

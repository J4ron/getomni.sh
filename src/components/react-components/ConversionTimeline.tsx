import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import React from "react";
import {
  Lock,
  WifiOff,
  ShieldCheck,
  MemoryStick,
  BadgeCheck,
  FileBadge,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyBento() {
  return (
    <div className="relative max-w-4xl mx-auto w-fullrounded-md ">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 pointer-events-none rounded-md"
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-pink-400 rounded-full opacity-80 blur-2xl -translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400 rounded-full opacity-80 blur-2xl translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-120 h-120 bg-yellow-400 rounded-full opacity-0 blur-3xl -translate-x-40 -translate-y-20"></div>
      </div>

      <BentoGrid className="md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              "[&>p:text-lg]",
              item.className,
              "ring-1 ring-transparent hover:ring-pink-400 transition-all duration-300",
              " hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.6)]",
              "text-white"
            )}
            icon={React.cloneElement(item.icon, { className: "text-pink-400" })}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg ring-1 ring-pink-600/60 p-2 items-center space-x-2 bg-gradient-to-br from-neutral-900 to-neutral-800"
      >
        <div className="w-full text-xs font-mono text-pink-300">
          Designed to keep your data local and offline.
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-lg ring-1 ring-pink-600/60 p-2 items-center space-x-2 w-3/4 ml-auto bg-gradient-to-br from-neutral-900 to-neutral-800"
      >
        <div className="w-full text-xs font-mono text-pink-300">
          Zero network dependency for full autonomy.
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg ring-1 ring-pink-600/60 p-2 items-center space-x-2 bg-gradient-to-br from-neutral-900 to-neutral-800"
      >
        <div className="w-full text-xs font-mono text-pink-300">
          Your files never leave your device.
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row rounded-full p-2 items-center space-x-2 w-full h-4"
        >
          <div className="flex-1 rounded-full bg-gradient-to-r from-pink-900 via-pink-600 to-pink-400 h-2" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800"
      style={{
        background:
          "linear-gradient(-45deg, #0f1a15, #0a0a0a, #0f1a15, #0a0a0a)",
        backgroundSize: "400% 400%",
      }}
    ></motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-xl bg-gradient-to-br from-[#0A0A0A] to-neutral-900 p-4 flex flex-col items-center justify-center ring-1 ring-pink-600/60"
      >
        <p className="text-xs text-center font-medium text-pink-300 mt-4">
          Your privacy is our priority.
        </p>
        <p className="bg-gradient-to-r from-pink-700/40 to-pink-900/40 text-pink-300 text-xs rounded-full px-2 py-1 mt-4">
          No Cloud Sync
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-xl bg-gradient-to-br from-[#0A0A0A] to-neutral-900 p-4 flex flex-col items-center justify-center ring-1 ring-cyan-600/60">
        <p className="text-xs text-center font-medium text-cyan-300 mt-4">
          Encrypted and local processing.
        </p>
        <p className="bg-gradient-to-r from-cyan-600/40 to-cyan-900/40 text-cyan-300 text-xs rounded-full px-2 py-1 mt-4">
          Safe & Secure
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-xl bg-gradient-to-br from-[#0A0A0A] to-neutral-900 p-4 flex flex-col items-center justify-center ring-1 ring-yellow-600/60"
      >
        <p className="text-xs text-center font-medium text-yellow-300 mt-4">
          You control your data completely.
        </p>
        <p className="bg-gradient-to-r from-yellow-600/40 to-yellow-900/40 text-yellow-300 text-xs rounded-full px-2 py-1 mt-4">
          Full Control
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-xl border border-cyan-600/40 p-2 items-start space-x-2 bg-gradient-to-br from-neutral-900 to-neutral-800"
      >
        <div className="bg-cyan-900/30 p-2 rounded-lg">
          <FileBadge className="h-6 w-6 text-cyan-400" />
        </div>
        <p className="text-xs font-mono text-cyan-300">
          Every file is verified to guarantee no corruption or data loss.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-xl border border-pink-700/40 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-gradient-to-br from-neutral-900 to-neutral-800"
      >
        <p className="text-xs font-mono text-pink-300">Reliability first.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-b from-pink-700 via-pink-400 to-pink-800 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Offline by Design",
    description: (
      <span className="text-sm text-white/80">
        Omni works fully offline. Your files stay on your machine—always.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <MemoryStick className="h-5 w-5 text-pink-400" />,
  },
  {
    title: "Secure File Handling",
    description: (
      <span className="text-sm text-white/80">
        No uploads. No tracking. Omni processes everything locally, securely.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <ShieldCheck className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: "No Internet Required",
    description: (
      <span className="text-sm text-white/80">
        Airplane mode? No problem. Omni converts without needing Wi-Fi.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <WifiOff className="h-5 w-5 text-yellow-400" />,
  },
  {
    title: "Built-in Privacy Layer",
    description: (
      <span className="text-sm text-white/80">
        Omni keeps your documents private. No cloud sync. No data leaks.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Lock className="h-5 w-5 text-pink-400" />,
  },
  {
    title: "Verified File Integrity",
    description: (
      <span className="text-sm text-white/80">
        Omni checks your files—no corrupted conversions, ever.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <BadgeCheck className="h-5 w-5 text-cyan-400" />,
  },
];

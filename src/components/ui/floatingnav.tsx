import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarStore } from "../../stores/navbarStore";

const leftNavItems = [{ label: "About", href: "#about" }];
const rightNavItems = [
  { label: "Docs", href: "#docs" },
  { label: "Get Omni", href: "#pricing" },
];

export default function FloatingNav() {
  const floatingNavVisible = useNavbarStore((state) => state.floatingNavVisible);
  const setFloatingNavVisible = useNavbarStore(
    (state) => state.setFloatingNavVisible
  );

  useEffect(() => {
    function onScroll() {
      setFloatingNavVisible(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [setFloatingNavVisible]);

  return (
    <AnimatePresence>
      {floatingNavVisible && (
        <>
          {/* Floating Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role="navigation"
            aria-label="Floating Navigation"
            className="
              fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50
              bg-[#0a0a0a] rounded-full px-10 py-4
              shadow-2xl
              w-auto flex items-center
              text-base font-semibold text-white
              select-none
              ring-1 ring-white/20
              hover:ring-white/40
              space-x-12
            "
          >
            {/* Links links */}
            <div className="flex space-x-8">
              {leftNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:underline focus:outline-none whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Rechts */}
            <div className="flex space-x-8">
              {rightNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:underline focus:outline-none whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Rundes Logo unten mittig, leicht versetzt */}
          <motion.a
            href="/"
            aria-label="Omni Home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            className="
              fixed bottom-18 left-1/2 transform -translate-x-1/2
              z-40
              bg-[#0a0a0a] rounded-full p-2 w-12 h-12
              shadow-2xl
              flex items-center justify-center
              cursor-pointer
              ring-1 ring-white/20 hover:ring-white/40
            "
          >
            <img
              src="/omniascii.png"
              alt="Omni Logo"
              className="h-8 brightness-[1000%] select-none"
              loading="eager"
              width={32}
              height={32}
            />
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}

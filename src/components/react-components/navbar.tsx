export default function Navbar() {

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Docs", href: "#docs" },
    { label: "Get Omni", href: "#pricing" },
  ];


  return (
    <>
      <div  className="h-5"></div>
      <nav
        className="top-0 z-50 drop-shadow-2xl bg-transparent transition-opacity border-b-2 border-t-2 border-dashed border-white"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="w-[1242px] h-[79px] bg-[#0a0a0a] rounded-md mx-auto flex items-center px-6 relative">
          <a
            href="/"
            aria-label="Omni Home"
            className="flex items-center space-x-2 text-white text-xl"
          >
            <img
              src="/asciilogo.png"
              alt="Omni Logo"
              className="ml-33 h-25 select-none brightness-[2000%]"
              loading="eager"
            />
          </a>

          <ul className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-12 text-[#F2F1F9] text-lg ">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:underline focus:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

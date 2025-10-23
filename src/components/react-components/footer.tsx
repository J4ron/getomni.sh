export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0A0A0A] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/2">
          <pre
            className="
    text-transparent
    bg-gradient-to-br from-orange-600 via-purple-500 to-blue-900
    bg-clip-text
    text-[10px] leading-[1.1] font-mono whitespace-pre-wrap
    select-none
    transition-transform duration-300 ease-out
    hover:-translate-y-0.5
    will-change-transform
  "
          >
            {`
 ________  _____ ______   ________   ___     
|\\   __  \\|\\   _ \\  _   \\|\\   ___  \\|\\  \\    
\\ \\  \\|\\  \\ \\  \\\\__  \\\\  \\ \\  \\\\ \\  \\ \\  \\   
 \\ \\  \\\\\\  \\ \\  \\\\|__| \\  \\ \\  \\\\ \\  \\ \\  \\  
  \\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ \\  \\\\ \\  \\ \\  \\ 
   \\ \\_______\\ \\__\\    \\ \\__\\ \\__\\\\ \\__\\ \\__\\
    \\|_______|\\|__|     \\|__|\\|__| \\|__|\\|__| 
`}
          </pre>

          <p className="mt-6 text-sm max-w-md">
            Omni is your offline-first file converter.
            <br />
            No cloud. No accounts. Just fast, private conversions — right on
            your device.
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/download" className="hover:text-white transition">
                  Download
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-white transition">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/roadmap" className="hover:text-white transition">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/license" className="hover:text-white transition">
                  Licensing
                </a>
              </li>
              <li>
                <a href="/imprint" className="hover:text-white transition">
                  Imprint
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Omni. Secure. Offline. Yours.
      </div>
    </footer>
  );
}

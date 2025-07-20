
const CLIDemo = () => {
  const commands = [
    {
      input: 'omni convert document.pdf --to docx',
      output: 'Converted document.docx --document.pdf (2.1s)'
    },
    {
      input: 'omni batch *.mp3 --to wav --quality high',
      output: [
        'Processing 24 files...',
        'Batch conversion complete (45.2s)'
      ]
    },
    {
      input: 'omni compress assets/ --format webp --size 80%',
      output: 'Compressed 156 images, saved 2.4GB'
    }
  ];

  return (
<div className='mt-16 w-full z-51 pointer-none:'>
    <div className="max-w-3xl mx-auto p-6 font-sans relative">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 -z-10 rounded-2xl pointer-events-none">
        <img 
          src="/cliglow.png" 
          alt="background"
          className="w-full mt-30 h-75 object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative">
       Your Terminal, Supercharged.
      </h2>
      
      {/* Terminal Container */} 
      <div className="bg-[#0A0A0A] shadow-xl overflow-hidden relative rounded-tl-lg rounded-tr-lg">
        {/* Terminal Header */}
        <div className="bg-[#0A0A0A] px-4 py-3 flex items-center border-b border-[#292929] rounded-tl-lg rounded-tr-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm ml-4">Terminal</div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-5 font-mono text-sm">
          {commands.map((cmd, index) => (
            <div key={index} className="mb-4 last:mb-0">
              {/* Command Input */}
              <div className="flex items-start">
                <span className="text-green-600 mr-2">$</span>
                <span className="text-gray-200">{cmd.input}</span>
              </div>
              
              {/* Command Output */}
              <div className="mt-1 ml-5">
                {Array.isArray(cmd.output) ? (
                  cmd.output.map((line, i) => (
                    <div key={i} className="flex text-green-600">
                      <span className="mr-2">✓</span>
                      <span>{line}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex text-green-600">
                    <span className="mr-2">✓</span>
                    <span>{cmd.output}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-4 text-center text-gray-200 relative text-shadow-lg">
        Works on Windows, macOS, and Linux → 
        <a 
          href="#all-commands" 
          className="text-gray-100 underline ml-1"
        >
          see all commands
        </a>
      </div>
    </div>
    </div>
  );
};

export default CLIDemo;
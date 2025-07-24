import { useEffect, useState } from "react";
import {Gauge} from "lucide-react";

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

  const [currentCmd, setCurrentCmd] = useState(0);
  const [typedInput, setTypedInput] = useState('');
  const [showOutput, setShowOutput] = useState(false);

useEffect(() => {
  if (currentCmd >= commands.length) return;

  const inputText = commands[currentCmd].input;
  let i = 0;

  setTypedInput('');
  setShowOutput(false);

  const typer = setInterval(() => {
    i++;
    if (i <= inputText.length) {
      setTypedInput(inputText.slice(0, i));
    } else {
      clearInterval(typer);
      setTimeout(() => setShowOutput(true), 500);
      setTimeout(() => setCurrentCmd(prev => prev + 1), 3000);
    }
  }, 40);

  return () => clearInterval(typer);
}, [currentCmd]);

  return (
    <div className='mt-16 w-full z-51 pointer-events-none'>
      <div className="max-w-3xl mx-auto p-6 font-sans relative">
        {/* Background */}
        <div className="absolute inset-0 -z-10 rounded-2xl pointer-events-none">
          <img 
            src="/cliglow.png" 
            alt="background"
            className="w-full mt-30 h-75 object-cover"
          />
        </div>

    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 relative flex justify-center items-center gap-2">
      Your Terminal{" "}
      <span className="flex items-center px-3 py-1 bg-[#0A0A0A] rounded-md shadow-lg">
        <Gauge className="w-6 h-6 text-white mr-2 drop-shadow-lg" />
        <span className="text-white uppercase tracking-wide drop-shadow-lg">
          Supercharged
        </span>
      </span>

    </h2>

        {/* Terminal */}
        <div className="bg-[#0A0A0A] shadow-xl overflow-hidden relative rounded-tl-lg rounded-tr-lg ">
          {/* Header */}
          <div className="bg-[#0A0A0A] px-4 py-3 flex items-center border-b border-[#292929] rounded-tl-lg rounded-tr-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm ml-4">Terminal</div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-sm h-[230px] overflow-y-auto">
            {commands.slice(0, currentCmd).map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">$</span>
                  <span className="text-gray-200 whitespace-pre-wrap">{cmd.input}</span>
                </div>
                <div className="mt-1 ml-5">
                  {Array.isArray(cmd.output) ? (
                    cmd.output.map((line, i) => (
                      <div key={i} className="flex text-green-600">
                        <span className="mr-2">✓</span>
                        <span className="whitespace-pre-wrap">{line}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex text-green-600">
                      <span className="mr-2">✓</span>
                      <span className="whitespace-pre-wrap">{cmd.output}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Aktuell getippter Befehl */}
            {currentCmd < commands.length && (
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">$</span>
                  <span className="text-gray-200 whitespace-pre-wrap">
                    {typedInput}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
                {showOutput && (
                  <div className="mt-1 ml-5">
                    {Array.isArray(commands[currentCmd].output) ? (
                      commands[currentCmd].output.map((line, i) => (
                        <div key={i} className="flex text-green-600">
                          <span className="mr-2">✓</span>
                          <span className="whitespace-pre-wrap">{line}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex text-green-600">
                        <span className="mr-2">✓</span>
                        <span className="whitespace-pre-wrap">{commands[currentCmd].output}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-gray-200 relative">
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

interface PulsingDotProps {
                  text: string;
}

const PulsingDot: React.FC<PulsingDotProps> = ({ text }) => {
  return (
    <div className="flex items-center text-center justify-center mt-5">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 mt-1"></div>
      <span className="text-center text-sm font-light">{text}</span>
    </div>
  );
};

export default PulsingDot;
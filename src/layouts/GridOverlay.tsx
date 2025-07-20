import DashedLines from '../components/ui/dashedlines';

export default function GridOverlay() {
  return (
    <>
      {/* Vertical lines */}
      <div className="absolute top-0 left-[21rem] h-screen z-40 pointer-events-none">
        <DashedLines orientation="vr" />
      </div>
      <div className="absolute top-0 right-[21.1rem] h-screen z-40 pointer-events-none">
        <DashedLines orientation="vr" />
      </div>
    </>
  );
}

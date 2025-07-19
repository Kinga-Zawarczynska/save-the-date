type WrapperWithBackgroundProps = {
  children?: React.ReactNode;
  imgSrc: string;
  className?: string;
};
export function WrapperWithBackground({
  children,
  imgSrc,
  className,
}: WrapperWithBackgroundProps) {
  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat w-full flex flex-col row-start-2 items-center justify-center relative px-5 text-center`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

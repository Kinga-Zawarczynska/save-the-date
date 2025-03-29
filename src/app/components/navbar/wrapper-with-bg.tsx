

type WrapperWithBackgroundProps = {
    children?: React.ReactNode;
    imgSrc: string;
};
export function WrapperWithBackground({children, imgSrc}: WrapperWithBackgroundProps) {

      return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat w-full flex flex-col row-start-2 items-center justify-center relative px-10 text-center" style={{ backgroundImage: `url(${imgSrc})` }}>
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      );
}

import Image from 'next/image';

type WrapperWithBackgroundProps = {
  children?: React.ReactNode;
  imgSrc: string;
  blurDataURL: string;
  className?: string;
  showOverlay?: boolean;
};

export function WrapperWithBackground({
  children,
  imgSrc,
  blurDataURL,
  className,
}: WrapperWithBackgroundProps) {
  return (
    <div className="min-h-screen w-full flex flex-col row-start-2 items-center justify-center relative px-5 text-center">
      <Image
        src={imgSrc}
        alt="Background"
        fill
        className="object-cover"
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className={`relative z-20 ${className}`}>{children}</div>
    </div>
  );
}

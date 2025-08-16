import bgImg1 from '../assets/1.jpg';
import bgImgBlur from '../assets/1_1.jpg';
import { WrapperWithBackground } from './components/wrapper-with-bg';

import Details from './components/details';
export default function Home() {
  return (
    <WrapperWithBackground
      imgSrc={bgImg1.src}
      blurDataURL={bgImgBlur.src}
      className="text-white flex flex-col items-start justify-center gap-5 py-30 lg:gap-8 lg:w-100"
    >
      <span className="flex flex-col  items-start">
        <p className="text-xl">AGNIESZKA</p>
        <p className="text-xs">ZAWARCZYŃSKA</p>
      </span>
      <p>oraz</p>
      <span className="flex flex-col items-start">
        <p className="text-xl">DAWID</p>
        <p className="text-xs">WOZBANOWICZ</p>
      </span>
      <p>wraz z Rodzicami</p>
      <p className="text-left">
        mają zaszczyt zaprosić Was na uroczystość zawarcia związku małżeńskiego.
      </p>
      <Details />
    </WrapperWithBackground>
  );
}

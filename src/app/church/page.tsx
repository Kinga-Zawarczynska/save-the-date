'use client';

import { useState } from 'react';
import bgImg from '../../assets/2.jpg';
import bgImgBlur from '../../assets/2_1.jpg';
import { WrapperWithBackground } from '../components/wrapper-with-bg';
import { IoIosHeartEmpty } from "react-icons/io";

import dynamic from 'next/dynamic';
import Button from '../components/button';
import CopyButton from '../components/copy-button';

const MapComponent = dynamic(() => import('../components/map'), { ssr: false });

export default function Church() {
  const [mapOpened, setMapOpened] = useState(false);
  return (
    <WrapperWithBackground imgSrc={bgImg.src} blurDataURL={bgImgBlur.src} className="flex flex-col items-center justify-center gap-10 py-30 lg:gap-12 lg:w-120">
      <span className='flex flex-col gap-2'><i>„Miłość, co daje siłę wszystko znieść, za wszystko też może wystarczyć”.</i>
      <i>– Johann Wolfgang von Goethe</i></span>
      <h1 className="text-white font-bold">Bądźcie z nami w tej najważniejszej chwili <IoIosHeartEmpty className="inline-block text-red-300" /></h1>
      <span className="text-white flex flex-col gap-3">Nasza uroczystość zawarcia związku małżeńskiego odbędzie się <strong className='text-red-300'>05.09.2025r. o godzinie 16:00</strong> w Parafii Rzymskokatolickiej pod wezwaniem św. Jacka Odrowąża w Straszynie.</span>
      <p className="text-white">Poniżej znajdziecie adres i mapę z zaznaczonym parkingiem. Parkowanie jest dozwolone na parkingach po obu stronach ulicy. Do kościoła kierujcie się schodami w górę.</p>
      <CopyButton label="Skopiuj adres parkingu" copyValue="54.27514015346252, 18.575818682250024" />
      
      {mapOpened && (
        <div className="w-full max-w-4xl h-96 flex items-center justify-center">
          <MapComponent lat={54.27513903058643} lng={18.575826374585073} iconImg='../../favicon.svg' />
        </div>
      )}
      <Button
        className=""
        onClick={() => setMapOpened(!mapOpened)}
      >
        {mapOpened ? 'Zamknij mapę' : 'Pokaż parking na mapie'}
      </Button>
    </WrapperWithBackground>
  );
}

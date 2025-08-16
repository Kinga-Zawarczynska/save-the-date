'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { GiPartyPopper } from 'react-icons/gi';
import bgImg from '../../assets/5.jpg';
import bgImgBlur from '../../assets/5_1.jpg';
import Button from '../components/button';
import { WrapperWithBackground } from '../components/wrapper-with-bg';
import CopyButton from '../components/copy-button';

const MapComponent = dynamic(() => import('../components/map'), { ssr: false });

export default function Venue() {
  const [mapOpened, setMapOpened] = useState(false);
  return (
    <WrapperWithBackground
      imgSrc={bgImg.src}
      blurDataURL={bgImgBlur.src}
      className="flex flex-col items-center justify-center gap-10 py-30 lg:gap-12 lg:w-120"
    >
      <span className="flex flex-col gap-2 text-white ">
        <i>
          „Ślub to nie zakończenie bajki – to dopiero początek najpiękniejszej
          przygody.”
        </i>
      </span>
      <h1 className="text-white font-bold">
        Czas na świętowanie!{' '}
        <GiPartyPopper className="inline-block text-red-300" />
      </h1>
      <span className="text-white flex flex-col gap-3">
        Zapraszamy na nasze wesele, które odbędzie się po mszy{' '}
        <strong className="text-red-300">w Dworku Kleszczewo</strong>
        <p>ul. Północna 20, 03-034 Kleszczewo</p>
      </span>
      <p className="text-white">Poniżej znajdziecie adres i mapę.</p>
      <CopyButton
        label="Skopiuj adres sali"
        copyValue="54.209098337955034, 18.5217262118689"
      />

      {mapOpened && (
        <div className="w-full max-w-4xl h-96 flex items-center justify-center">
          <MapComponent
            lat={54.209098337955034}
            lng={18.5217262118689}
            iconImg="../../favicon.svg"
          />
        </div>
      )}
      <Button onClick={() => setMapOpened(!mapOpened)}>
        {mapOpened ? 'Zamknij mapę' : 'Pokaż salę na mapie'}
      </Button>
    </WrapperWithBackground>
  );
}

'use client';

import bgImg from '../../assets/2.jpg';
import { WrapperWithBackground } from '../components/wrapper-with-bg';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../components/map'), { ssr: false });

export default function Church() {
  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
      <h1 className="text-white">KOŚCIÓŁ</h1>
      <p className="text-white">info kościół</p>
      <MapComponent />
    </WrapperWithBackground>
  );
}

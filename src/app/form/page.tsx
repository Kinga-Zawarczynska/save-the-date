import bgImg from '../../assets/4.jpg';
import { WrapperWithBackground } from '../components/wrapper-with-bg';

export default function Form() {
  return (
    <WrapperWithBackground
      imgSrc={bgImg.src}
      className="flex flex-col items-center justify-center gap-10 py-30 lg:gap-12 lg:w-120 text-white"
    >
      <h1>Cieszymy się, ze będziecie tego dnia z nami!</h1>
      <span className="flex flex-col gap-2 text-white ">
        <i className="text-red-300 text-xl">
          Prosimy o potwierdzenie przybycia do
        </i>
        <i>
          <strong className="text-red-300 text-2xl underline">
            30.07.2025r.
          </strong>
        </i>
      </span>
      <p>
        Agnieszka: <strong>+48 730 194 002</strong>
      </p>
      <p>
        Dawid: <strong>+48 666 681 277</strong>
      </p>
    </WrapperWithBackground>
  );
}

import bgImg from '../../assets/3.jpg';
import { WrapperWithBackground } from '../components/wrapper-with-bg';

export default function Contact() {
  return (
    <WrapperWithBackground
      imgSrc={bgImg.src}
      className="flex flex-col items-center justify-center gap-10 py-30 lg:gap-12 lg:w-120 text-white"
    >
      <h1 className="text-red-300">KONTAKT</h1>
      <p className="text-white">
        W razie potrzeby kontaktu w sprawie noclegu, menu wegetariańskiego,
        dojazdu itp. prosimy o kontakt:
      </p>
      <div className="flex flex-col gap-10">
        <span>
          <i className="text-red-300">PRZED WESELEM</i>
          <p>
            Agnieszka: <strong>+48 730 194 002</strong>
          </p>
          <p>
            Dawid: <strong>+48 666 681 277</strong>
          </p>
        </span>
        <span>
          <i className="text-red-300">W DNIU WESELA</i>
          <p>
            Świadkowa Kinga: <strong>+48 789 391 174</strong>
          </p>
          <p>
            Świadek Mateusz: <strong>+48 881 680 534</strong>
          </p>
        </span>
      </div>
    </WrapperWithBackground>
  );
}

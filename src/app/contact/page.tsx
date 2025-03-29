import bgImg from "../../assets/3.jpg";
import { WrapperWithBackground } from "../components/navbar/wrapper-with-bg";

export default function Contact() {

  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
        <h1 className="text-white">KONTAKT</h1>
        <p className="text-white">wasze numery</p>
    </WrapperWithBackground>
  );
}

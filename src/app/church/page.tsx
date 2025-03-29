import bgImg from "../../assets/2.jpg";
import { WrapperWithBackground } from "../components/navbar/wrapper-with-bg";

export default function Church() {

  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
        <h1 className="text-white">KOŚCIÓŁ</h1>
        <p className="text-white">info kościół</p>
    </WrapperWithBackground>
  );
}

import bgImg from "../../assets/5.jpg";
import { WrapperWithBackground } from "../components/wrapper-with-bg";

export default function Venue() {

  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
        <h1 className="text-white">WESELE</h1>
        <p className="text-white">info o sail itd</p>
    </WrapperWithBackground>
  );
}

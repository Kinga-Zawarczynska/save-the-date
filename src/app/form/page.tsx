import bgImg from "../../assets/4.jpg";
import { WrapperWithBackground } from "../components/navbar/wrapper-with-bg";

export default function Form() {

  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
        <h1 className="text-white">Tu niedługo pojawi się formularz, w którym będziecie mogli potwierdzić swoją obecność oraz wybrać menu!</h1>
    </WrapperWithBackground>
  );
}

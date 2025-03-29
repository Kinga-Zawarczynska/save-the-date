

import bgImg1 from "../assets/1.jpg";
import { WrapperWithBackground } from "./components/navbar/wrapper-with-bg";
export default function Home() {
  return (

    
      <WrapperWithBackground imgSrc={bgImg1.src}>
      <h1 className="text-white">Welcome page</h1>
      <p className="text-white">Jakiś catchy tekst </p></WrapperWithBackground> 
      

  );
}

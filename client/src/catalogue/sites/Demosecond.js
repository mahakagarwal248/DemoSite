import React,{useEffect} from "react";
import Section1 from "./Components/D2Components/section1/Section1";
import Section2 from "./Components/D2Components/section2/Section2";
import Section3 from "./Components/D2Components/section3/Section3";
import Section4 from "./Components/D2Components/section4/Section4";

export const Demosecond = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
};


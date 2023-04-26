import React, {useState} from "react";
import GlobalStyle from "../components/globalStyles";
import Navbar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import InfoSection from "../components/InfoSection";
import { InfoData, InfoDataFour, InfoDataThree, InfoDataTwo } from "../data/InfoData";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
import SliderCarousel from "../components/SliderCarousel";



function Home() {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
      setisOpen(!isOpen);
    };
  
  
    return (
      <div>
        <GlobalStyle />
        <Navbar toggle = {toggle} />
        <Dropdown isOpen = {isOpen} toggle = {toggle} />
        <SliderCarousel/> 
        <InfoSection {...InfoData} />
        <InfoSection {...InfoDataTwo} />
        <InfoSection {...InfoDataThree}/>
        <InfoSection {...InfoDataFour} /> 
        <ScrollTop />
        <Footer />
      </div>
    );
  }

export default Home

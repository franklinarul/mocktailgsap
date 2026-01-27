import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktailes";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger,SplitText);

function App(){
    return(
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Cocktails></Cocktails>
        <About></About>
        <Art></Art>
        <Menu></Menu>
        <Footer></Footer>
        </>
    )
}

export default App
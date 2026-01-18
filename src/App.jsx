import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger,SplitText);

function App(){
    return(
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="h-screen"></div>
        </>
    )
}

export default App
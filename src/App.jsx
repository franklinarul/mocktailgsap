import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
gsap.registerPlugin(ScrollTrigger,SplitText);

function App(){
    return(
        <div className="flex-center h-screen">
            <h1 className="text-3xl text-red-200">app</h1>
        </div>
    )
}

export default App
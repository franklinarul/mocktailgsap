import { useGSAP } from "@gsap/react"
import { navLinks } from "../../Constants"

function Navbar(){

    const Navbar = ()=>{
        useGSAP(()=>{
            const navtween = gsap.timeline({
                scrollTrigger:{
                    trigger:"nav",
                    start:"bottom top"
                }
            });
            navtween.fromTo('nav',{backgroundColor:"transprent"},{
                backgroundColor:"00000050",
                backgroundfilter:'blur(10px)',
                duration:1,
                ease:'power1.inOut'
            });
        })
    }

    return(
       <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
             <img src="/images/logo.png" alt="logo"></img>   
                <p>velvet pour</p>
            </a>
            <ul>
                {navLinks.map((items)=>(
                    <li key={items.id}>
                        <a href={`#${items.id}`}>{items.title}</a>
                    </li>
                ))}
            </ul>
        </div>
       </nav>
    )
}

export default Navbar
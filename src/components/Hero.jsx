import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive";
function Hero(){
    const vedioref = useRef();
    const ismobile = useMediaQuery({maxWidth:767});
    useGSAP(()=>{
       const herosplit = new SplitText('.title',{type:'chars,words'})
       const paragraphsplit = new SplitText(".subtitle",{type:"lines"})

       herosplit.chars.forEach((chars)=>chars.classList.add("text-gradient"));

       gsap.from(herosplit.chars,{
        yPercent:60,
        duration:1.8,
        ease:"expo.out",
        stagger:0.06
       });
       gsap.from(".left-leaf",{
        x:-200,
        duration:1.8,
        ease:"expo.inOut",
        delay:1,
       })
       gsap.from(".right-leaf",{
        x:200,
        duration:1.8,
        ease:"expo.out",
        delay:1,
       })
     gsap.from(paragraphsplit.lines,{
        opacity:0,
        yPercent:100,
        duration:1.8,
        ease:"expo.Out",
        stagger:0.06,
        delay:2,
     });
    
     gsap.timeline({
        scrollTrigger:{
            trigger:"#hero",
            start:"top top",
            end:"bottom top",
            scrub:true,
        }
     })
     .to(".right-leaf",{y:200},0)
     .to(".left-leaf",{y:-200},0)

     const startvalue = ismobile ? "top 50%":'center 100%';
     const endvalue = ismobile ? "120 top":"bottom top";
    
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'vedio',
            start:startvalue,
            end:endvalue,
            scrub:true,
            pin:true,
        }
    })

    vedioref.current.onloadedmetadata = ()=>{
        tl.to(vedioref.current,{
            currentTime:vedioref.current.duration
        })
    }

    },[])
return(
    <>
    <section id="hero" className="noisy">
        <h1 className="title"> MOJITO</h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf"className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right-leaf"className="right-leaf" />

       <div className="body">
        <div className="content">
         <div className="space-y-5 hidden md:block">
         <p className="subtitle">cool.crips.classic</p>
         <p className="subtitle">
            sip the sprite <br/> in the summer
         </p>
         </div>
         <div className="view-cocktails">
           <p className="subtitle">
            Every cocktails on our menu is a blend of perium ingredients,cretaive flair,and timless recipies- designed to delight your senses.
           </p>
           <a href="#cocktails" className="subtitle"> View Cocktails</a>
          </div>
        </div>
       </div>
    </section>
    <div className="video absolute inset-0">
        <video ref={vedioref} src="/videos/input.mp4" muted playsInline preload="auto"></video>
    </div>
    </>
)
}
export default Hero
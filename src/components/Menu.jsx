import { useRef, useState } from "react";
import { sliderLists } from "../../Constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Menu(){
    const [currentindex,setcurrentindex]=useState(0)
    const contentref = useRef()

    useGSAP(()=>{
         gsap.fromTo("#title",{opacity:0},{opacity:1,duration:1});
         gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{xPercent:0,opacity:1,duration:1,ease:"power1.inOut"})
         gsap.fromTo(".details h2",{yPercent:100,opacity:0,},{yPercent:0,opacity:100,ease:"power1.inOut"})
         gsap.fromTo(".details p",{yPercent:100,opacity:0,},{yPercent:0,opacity:100,ease:"power1.inOut"})
    },[currentindex])

    const totalcocaktails = sliderLists.length
    function changingcurrentindex(index){
          const cindex = (index + totalcocaktails) % totalcocaktails
          setcurrentindex(cindex)
    }
   const getcocktail = (indexoffset)=>{
    return sliderLists[(currentindex+indexoffset+totalcocaktails)%totalcocaktails]
   }
   const currentcocktail = getcocktail(0);
   const prevcocktail = getcocktail(-1);
   const nextcocktail = getcocktail(1)
    return(
        <section id="menu" aria-labelledby="menu-heading">
           

           <h2 id="menu-heading" className="sr-only">
            cocktail menu
           </h2>

           <nav className="cocktail-tabs" aria-label="cocktail navigation">
           {sliderLists.map((items,index)=>{
            const isactive = index === currentindex;
            return(
                <button key={items.id} className={`${isactive?'text-white border-white':"text-white/50 border-white/50"}`} onClick={()=>changingcurrentindex(index)}>
                    {items.name}
                </button>
            )
           })}
           </nav>
           <div className="content">
            <div className="arrows">
           <button className="text-left" onClick={()=> changingcurrentindex(currentindex-1)}>
             <span>{prevcocktail.name}</span>
             <img src="/images/right-arrow.png" alt="" />
           </button>

            <button className="text-left" onClick={()=> changingcurrentindex(currentindex+1)}>
             <span>{nextcocktail.name}</span>
             <img src="/images/left-arrow.png" alt="" />
           </button>
            </div>
            <div className="cocktail">
                <img src={currentcocktail.image} className="object-contain" alt="" />
            </div>
            <div className="recipe">
                 <div ref={contentref} className="info">
                    <p>Recipe for:</p>
                    <p id="title">{currentcocktail.title}</p>
                 </div>
                 <div className="details">
                    <h2>{currentcocktail.name}</h2>
                    <p>{currentcocktail.description}</p>
                 </div>
            </div>
           </div>
        </section>
    )
}
export default Menu
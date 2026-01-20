import gsap from "gsap"
import { cocktailLists, mockTailLists } from "../../Constants"
import { useGSAP } from "@gsap/react"

function Cocktails(){
    
    useGSAP(()=>{
       gsap.timeline({
        scrollTrigger:{
            trigger:"#cocktails",
            start:"top top ",
            end:"bottom top",
        }
       })
      .from("#c-left-leaf",{
        x:-300,
        y:300,
        duration:1.3,
        ease:"expo.out",
      },0)
      .from("#c-right-leaf",{
        x:300,
        y:300,
        duration:1.3,
        ease:"expo.out",
      },0)
       const scrub = gsap.timeline({
        scrollTrigger:{
            trigger:"#cocktails",
            start:"40% top",
            end:"bottom top",
            scrub:true,
        }
     
      })
       scrub.to("#c-left-leaf",{
            y:300,
        },0)
         .to("#c-right-leaf",{
            y:300,
        },0)
    },[Cocktails])

    return(
        <section id="cocktails" className="noisy px-28">
             <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
             <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

             <div className="list">
            <div className="popular">
        <h2> most popular</h2>
        <ul>
            {cocktailLists.map(({name,country,detail,price})=>(
                <li key={name}>
                  <div className="md:me-28">
                     <h3>{name}</h3>
                     <p>{country} | {detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
            ))}
        </ul>
            </div>
            <div className="loved">
        <h2> most loved</h2>
        <ul>
            {mockTailLists.map(({name,country,detail,price})=>(
                <li key={name}>
                  <div className="md:me-28">
                     <h3>{name}</h3>
                     <p>{country} | {detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
            ))}
        </ul>
            </div>
             </div>
        </section>
    )

}

export default Cocktails
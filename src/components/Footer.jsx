import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../Constants"
import { SplitText } from "gsap/all"
import gsap from "gsap";

function Footer(){
    useGSAP(()=>{
        const titlesplit = SplitText.create("#contact h2",{type:"words"});

        const Timeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#contact",
                start:"top center",
            },
        })
        Timeline
        .from(titlesplit.words,{opacity:0,yPercent:100,stagger:0.02})
        .from("#contact h3 , #contact p",{opacity:0,yPercent:100,stagger:0.02})
        .to("#f-right-leaf",{y:"-50",duration:1,ease:"power1.inOut"})
        .to("#f-left-leaf",{y:"-50",duration:1,ease:"power1.inOut"})

    })
    return(
        <footer id="contact">
         <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
         <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

         <div className="content">
            <h2>wheere to find Us</h2>
        
         <div>
            <h3>Visit our bar</h3>
            <p>456,Raq Blvad . #404,los Angles,Ca 90210</p>
         </div>
         <div>
            <h3>Contact us</h3>
            <p>hello@jsmocktail.com</p>
         </div>
         <div>
            <h3>open every day</h3>
            {openingHours.map((item)=>(
                <p key={item.day}>
                    {item.day}:{item.time}
                </p>
            ))}
         </div>
         <div>
            <h3>Socials</h3>
            <div className="flex-center gap-5">
          {socials.map((items)=>(
            <a href={socials.url} key={socials.name} rel="noopener noreferrer">
                <img src={socials.icon} alt="" />
            </a>
          ))
          }
            </div>
         </div>
          </div>
        </footer>
    )
}

export default Footer
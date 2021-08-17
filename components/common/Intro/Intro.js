import Image from "next/image"
import s from "./Intro.module.css"
import bc from "../../../public/assets/bitcoinpng.png"


export default function Intro({
    introtitle,
     introdescription
    }) {
    return(
        <section>
        <div className={s.main}>
            
            <div className={s.responsive}>
                <div className={s.content}>
                    
                    <div className={s.text}>
                    <h1 className={s.title}>
                        {introtitle}
                    </h1>
                    <p className={s.description}>
                        {introdescription}
                    </p>
                    <div className={s.buttonbox}>
                        <a href="#learn-more" className={s.button}>
                            Learn More
                        </a>
                    </div>
                    </div>
                    <div className={s.imagery}>
                        <Image src={bc} width={200} height={200} layout="intrinsic" />
                    </div>
                    
                </div>
                
            </div>
        </div>
        </section>
    )
}
import Image from "next/image"
import s from "./Experts.module.css"
import first from "../../../public/assets/overload.png"
import second from "../../../public/assets/customer-review.png"
import third from "../../../public/assets/bar-chart.png"

export default function Experts({
    expertisetitle,
    expertisedescription,
    firstitemtitle,
    firstitemdescription,
    seconditemtitle,
    seconditemdescription,
    thirditemtitle,
    thirditemdescription
}) {
    return(
        <section>
            <span id="learn-more"></span>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.textbox}>
                        <div className={s.titlebox}>
                            <h2 className={s.title}>
                                {expertisetitle}
                            </h2>
                        </div>
                        <div className={s.descriptionbox}>
                            <p className={s.description}>
                            {expertisedescription}
                            </p>
                        </div>
                    </div>
    
                    <div className={s.additonalitems}>
                        <div className={s.item}>
                            <div className={s.itemimage}>
                                <Image src={first} width={128} height={128} layout="intrinsic" />
                            </div>
                            <div className={s.itemtextbox}>
                                <h3 className={s.itemtitle}>
                                    {firstitemtitle}
                                </h3>
                                <p className={s.itemdescription}>
                                    {firstitemdescription}
                                </p>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemimage}>
                            <Image src={second} width={128} height={128} layout="intrinsic" />
                            </div>
                            <div className={s.itemtextbox}>
                                <h3 className={s.itemtitle}>
                                    {seconditemtitle}
                                </h3>
                                <p className={s.itemdescription}>
                                    {seconditemdescription}
                                </p>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemimage}>
                            <Image src={third} width={128} height={128} layout="intrinsic" />
                            </div>
                            <div className={s.itemtextbox}>
                                <h3 className={s.itemtitle}>
                                    {thirditemtitle}
                                </h3>
                                <p className={s.itemdescription}>
                                    {thirditemdescription}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
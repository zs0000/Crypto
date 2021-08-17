import Marquee from "react-fast-marquee"
import MarqueCard from "../MarqueCard/MarqueCard"
import s from "./Talk.module.css"

export default function Talk({
title
}) {
    return(
        <section>
            <span id="testimonials"></span>
        <div className={s.main}>
            <div className={s.bg}>
            <svg id="visual" viewBox="0 0 1920 1080" width="1920" height="1080"><path d="M0 228L384 239L768 303L1152 152L1536 303L1920 163L1920 0L1536 0L1152 0L768 0L384 0L0 0Z" fill="#ff8e00"></path><path d="M0 563L384 476L768 725L1152 552L1536 455L1920 584L1920 161L1536 301L1152 150L768 301L384 237L0 226Z" fill="#ffa548"></path><path d="M0 627L384 573L768 833L1152 703L1536 584L1920 692L1920 582L1536 453L1152 550L768 723L384 474L0 561Z" fill="#ffba76"></path><path d="M0 789L384 692L768 887L1152 833L1536 671L1920 779L1920 690L1536 582L1152 701L768 831L384 571L0 625Z" fill="#ffd0a3"></path><path d="M0 962L384 908L768 984L1152 919L1536 919L1920 897L1920 777L1536 669L1152 831L768 885L384 690L0 787Z" fill="#ffe6d0"></path><path d="M0 1081L384 1081L768 1081L1152 1081L1536 1081L1920 1081L1920 895L1536 917L1152 917L768 982L384 906L0 960Z" fill="#fdfdfd"></path></svg>
            </div>
       
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.page}>
                        <h3 className={s.pagetitle}>
                            {title}
                        </h3>
                    </div>
                    <div className={s.item}>
                    <Marquee 
        speed={60}
        gradient={false}
        >
            <MarqueCard
            name="John Smith"
            status="Basic Member"
            date="August 16th, 2021"
            reviewdescription="Incredibly helpful. Before investing was pure impulse for me haha. I just didn't have time, and I saw my friends making money on things like Doge and I would just lose money. Now I just wait for Signals and Summaries to decide when to buy."
            />
            <MarqueCard
            name="Derrick Jenkins"
            status="Diamond Member"
            date="June 19th, 2021"
            reviewdescription="WOW. Absoulutely the most accepting, and educational community i've ever come across on the internet. Let alone where money is involved. Everyone have the same mission, and often times are invested in the same things as your are. Lots of people willing to share!"
            />
            <MarqueCard
            name="Hannah Sully"
            status="Basic Member"
            date="July 6th, 2021"
            reviewdescription="Life savers lol. Crypto is annoying and seemed like it was a lottery before this group. A lot of the things that affect price the most aren't televised or broadcasted as top news. Thankfully in this group it is, currently i am using some of the free courses aswell! Cheers!"
            />
            <MarqueCard
            name="Claire Grendle"
            status="Basic Member"
            date="June 26th, 2021"
            reviewdescription="Personally I have to admit, I was skeptical to pay to join any group, But it's more than that i've realized. The community empowers eachother through awareness, and everyone has eachothers backs. Also the personalized daily summaries and weekly conferences are so helpful!"
            />
            <MarqueCard
            name="Garret Terry"
            status="Diamond Member"
            date="January 12th, 2021"
            reviewdescription="I was reccomended this by my brother, and haven't looked back since then. I have been a construction worker my whole life, and thanks to this group and a little learning, i've retired after just a year of being in here. i though retirement was atleast 10 years away, minimum!"
            />
            <MarqueCard
            name="Jared Grasso"
            status="Diamond Member"
            date="January 12th, 2021"
            reviewdescription="Too Many oppurtunities, not enough money haha. I didn't know about Defi, Smart contracts , NFTs or anything more than bitcoin really. It's actually kind of sad how hard it is to understand without spending hours a day, but you guys are awesome with the personal summaries you send every day."
            />
        </Marquee>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
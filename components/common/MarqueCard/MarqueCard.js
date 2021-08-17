import s from "./MarqueCard.module.css"

export default function MarqueCard({
    name,
    status,
    date,
    reviewdescription
}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.item}>
                        <div className={s.reviewtext}>
                            <span className={s.reviewname}>
                            {name}
                            </span>
                            <div className={s.reviewdetails}>
                            <span className={s.reviewstatus}>
                            {status}
                            </span>
                            <span className={s.reviewdate}>
                            {date}
                            </span>
                            </div>
                        </div>
                        <div className={s.reviewmid}>
                            <p className={s.reviewdescription}>
                                {reviewdescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
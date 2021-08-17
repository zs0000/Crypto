import s from "./Offers.module.css"

export default function Offers({
basictitle,
basicprice,
firstbasicbenefit,
secondbasicbenefit,
thirdbasicbenefit

}) {
    return(
        <section>
            <span id="contact"></span>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.offerscontainer}>
                    <div className={s.offercard}>
                    <div className={s.offertext}>
                    <h3 className={s.offertitle}>
                    Basic Membership
                    </h3>
                    </div>
                    <div className={s.offerdescriptionbox}>
                        <span className={s.offerdescription}>
                            Lowest Package we offer for investors on a budget, or newer investors.
                        </span>
                    </div>
                    <div className={s.pricebox}>
                        <span className={s.price}>
                            $29
                        </span>
                        <span className={s.interval}>
                            Monthly
                        </span>
                    </div>
                    <div className={s.additionalbenefitsbox}>
                        <div className={s.additionallabelbox}>
                        <span className={s.additonallabel}>
                        Additional Benefits
                        </span>
                        </div>
                    <div className={s.benefitbox}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Base level Access to Private Community
                    </span>
                    </div>
                    <div className={s.benefitbox}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Unlock Daily Top Investment Choices
                    </span>
                    </div>
                    <div className={s.benefitbox}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Signals for up to 2 Digital Assets
                    </span>
                    </div>
                    </div>
                    <div className={s.buttonbox}>
                        <a className={s.button} href="/">
                        Purchase Membership
                        </a>
                    </div>
                    </div>
                    <div className={s.offercard}>
                    <div className={s.offertext}>
                    <h3 className={s.offertitle}>
                    Gold Membership
                    </h3>
                    </div>
                    <div className={s.offerdescriptionbox}>
                        <span className={s.offerdescription}>
                            Mid Tier Package for a more personal relationship with the experts.
                        </span>
                    </div>
                    <div className={s.pricebox}>
                        <span className={s.price}>
                            $79
                        </span>
                        <span className={s.interval}>
                            Monthly
                        </span>
                    </div>
                    <div className={s.additionalbenefitsbox}>
                        <div className={s.additionallabelbox}>
                        <span className={s.additonallabel}>
                        Additional Benefits
                        </span>
                        </div>
                    <div className={s.benefitbox}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Mid Level Clearance to Private Community
                    </span>
                    </div>
                    <div className={s.benefitbox}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Personalized Daily Investment Summaries
                    </span>
                    </div>
                    <div className={s.benefitbox}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Signals for up to 6 Digital Assets
                    </span>
                    </div>
                    </div>
                    <div className={s.secondbuttonbox}>
                        <a className={s.button} href="/">
                        Purchase Membership
                        </a>
                    </div>
                    </div>
                    <div className={s.offercard}>
                    <div className={s.offertext}>
                    <h3 className={s.offertitle}>
                    Diamond Membership
                    </h3>
                    </div>
                    <div className={s.offerdescriptionbox}>
                        <span className={s.offerdescription}>
                            Highest Package. Full Access to the community and our experts.
                        </span>
                    </div>
                    <div className={s.pricebox}>
                        <span className={s.price}>
                            $199
                        </span>
                        <span className={s.interval}>
                            Monthly
                        </span>
                    </div>
                    <div className={s.additionalbenefitsbox}>
                        <div className={s.additionallabelbox}>
                        <span className={s.additonallabel}>
                        Additional Benefits
                        </span>
                        </div>
                    <div className={s.benefitbox}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Full Clearance + Personal Investing Agent
                    </span>
                    </div>
                    <div className={s.benefitbox}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Access To Our Exclusive 'Insider Tools'
                    </span>
                    </div>
                    <div className={s.benefitbox}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
                        </div>
                    <span className={s.benefit}>
                            Signals for up to 2 Digital Assets
                    </span>
                    </div>
                    </div>
                    <div className={s.thirdbuttonbox}>
                        <a className={s.button} href="/">
                        Purchase Membership
                        </a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
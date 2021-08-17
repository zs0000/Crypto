import Container from '../Container/container'
import s from "./footer.module.css"
import Image from "next/image"
import tw from "../../../public/assets/twitter.png"
import fb from "../../../public/assets/facebook.png"
import ds from "../../../public/assets/discord.png"

export default function Footer() {
  return (
    <footer className={s.main}>
      <Container>
        <div className={s.contained}>
          <div className={s.textbox}>
            <p className={s.text}>
            Copyright 2021 © Sentry Bridge Web Design - Example Sales Funnel
            </p>
          </div>
          <div className={s.socials}>
            <div className={s.social}>
          <Image src={tw}  width={32} height={32} layout="intrinsic" />
            </div>
            <div className={s.social}>
          <Image src={fb} width={32} height={32} layout="intrinsic" />
            </div>
            <div className={s.social}>
          <Image src={ds} width={32} height={32} layout="intrinsic" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
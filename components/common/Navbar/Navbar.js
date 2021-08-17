import s from "./Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    return(
        <div className={s.main}>
            
            <div className={s.bar}>
                <ul className={s.items}>
                    <li className={s.itembox}>
                        <Link href="/#top">
                        <a className={s.navitem}>
                            Home
                        </a>
                        </Link>                    
                    </li>
                    <li className={s.itembox}>
                        <Link href="/#learn-more">
                        <a className={s.navitem}>
                            Who We Serve
                        </a>
                        </Link>                    
                    </li>
                    <li className={s.itembox}>
                        <Link href="/#testimonials">
                        <a className={s.navitem}>
                            Testimonials
                        </a>
                        </Link>                    
                    </li>
                    <li className={s.itembox}>
                        <Link href="/#contact">
                        <a className={s.navitem}>
                            Join Now
                        </a>
                        </Link>                    
                    </li>
                    
                </ul>

            </div>
        </div>
    )
}
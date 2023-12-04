import style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className={style.navbar_nav}>
            <div className="container">
                <div className={style.navbar}>
                    <div className={style.brandName}>
                        <Image src="/assets/logo.png"  alt="logo" width="90" height="70" />
                    </div>
                    <div className={style.navMenu}>
                        <ul>
                            <li className={style.nav_link}>
                                <Link href="/" className={style.active}>Categories</Link>
                            </li>
                            <li className={style.nav_link}>
                                <Link href="/">Gifting</Link>
                            </li>
                            <li className={style.nav_link}>
                                <Link href="/">How to Fangram</Link>
                            </li>
                            <li className={style.nav_link}>
                                <Link href="/">Support</Link>
                            </li>
                        </ul>
                        <div className={style.group_btn}>
                            <button className={style.light_btn}>
                                Promote My Business
                            </button>
                            <button className={style.dark_btn}>
                                Login / Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
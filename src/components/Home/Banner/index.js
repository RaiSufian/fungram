'use client'
import styles from './Banner.module.css';
import Slider from "react-slick";
import Image from 'next/image';
const Banner = () => {
    const settings = {
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 400,
        rows: 1,
        slidesPerRow: 1,
        arrows: false,
        dots: true,
    };
    return (
        <section>
            <div className="container">
                <div className={styles.bannerSection}>
                    <div className={styles.bannerBlock}>
                        <div className={styles.bannercontent}>
                            <h3>Promote your business <br/> through <span>celebrity</span></h3>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</p>
                            <button>Fill The Form</button>
                        </div>
                        <div>
                            <div className={styles.slider}>
                                <Slider {...settings}>
                                    <div>

                                        <div className={styles.card}>
                                            <Image src="/assets/banner.png" width={400} height={230} alt='banner_img' />
                                            <p># Munmun datta</p>
                                        </div>
                                    </div>
                                    <div>

                                        <div className={styles.card}>
                                            <Image src="/assets/banner.png" width={400} height={230} alt='banner_img' />
                                            <p># Munmun datta</p>
                                        </div>
                                    </div>
                                    <div>

                                        <div className={styles.card}>
                                            <Image src="/assets/banner.png" width={400} height={230} alt='banner_img' />
                                            <p># Munmun datta</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Banner;
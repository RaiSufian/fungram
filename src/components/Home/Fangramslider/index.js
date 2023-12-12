'use client'
import styles from './Fangramslider.module.css';
import Slider from "react-slick";
import Image from 'next/image';

const Fangram = ({ name }) => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        rows: 1,
        slidesPerRow: 1
    };
    const slideList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <section className={styles.section}>
            <div className="container fangramSlider">
                <div className={styles.header}>
                    <h2>{name}</h2>
                    <button>
                        See All
                    </button>
                </div>
                <div className={styles.sliderSide}>
                    <div className={styles.slider_btns}>
                        <button className={styles.back_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_92_33345)">
                                    <path d="M3.97105 7.98112L10.7594 1.19291C10.9164 1.03578 11.126 0.949219 11.3494 0.949219C11.5729 0.949219 11.7825 1.03578 11.9395 1.19291L12.4394 1.6927C12.7647 2.01837 12.7647 2.54768 12.4394 2.87285L6.73911 8.57317L12.4458 14.2798C12.6028 14.437 12.6895 14.6464 12.6895 14.8698C12.6895 15.0934 12.6028 15.3028 12.4458 15.4601L11.9458 15.9598C11.7887 16.1169 11.5793 16.2035 11.3558 16.2035C11.1323 16.2035 10.9227 16.1169 10.7657 15.9598L3.97105 9.16536C3.81367 9.00773 3.72723 8.79727 3.72772 8.57355C3.72723 8.34895 3.81367 8.13862 3.97105 7.98112Z" fill="#D42978" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_92_33345">
                                        <rect width="15.2542" height="15.2542" fill="white" transform="matrix(-1 0 0 1 15.8359 0.949219)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className={styles.next_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_92_33340)">
                                    <path d="M12.5993 7.98112L5.81094 1.19291C5.65393 1.03578 5.44434 0.949219 5.22086 0.949219C4.99739 0.949219 4.7878 1.03578 4.63079 1.19291L4.13088 1.6927C3.80558 2.01837 3.80558 2.54768 4.13088 2.87285L9.8312 8.57317L4.12455 14.2798C3.96755 14.437 3.88086 14.6464 3.88086 14.8698C3.88086 15.0934 3.96755 15.3028 4.12455 15.4601L4.62447 15.9598C4.7816 16.1169 4.99106 16.2035 5.21454 16.2035C5.43802 16.2035 5.64761 16.1169 5.80461 15.9598L12.5993 9.16536C12.7566 9.00773 12.8431 8.79727 12.8426 8.57355C12.8431 8.34895 12.7566 8.13862 12.5993 7.98112Z" fill="#D42978" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_92_33340">
                                        <rect width="15.2542" height="15.2542" fill="white" transform="translate(0.734375 0.949219)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <Slider {...settings}>
                        {
                            slideList.map((item, index) => {
                                return (
                                    <div className={styles.sidlerItem} key={index}>
                                        <div className={styles.card}>
                                            <div className={styles.fav}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <g clip-path="url(#clip0_92_33396)">
                                                        <path d="M7.99998 14.6792C7.78641 14.6792 7.58057 14.6018 7.42011 14.4612C6.81414 13.9314 6.22993 13.4335 5.71448 12.9942L5.71184 12.9919C4.20066 11.7041 2.89569 10.592 1.98772 9.49646C0.972763 8.27176 0.5 7.1105 0.5 5.84192C0.5 4.6094 0.922636 3.4723 1.68995 2.63998C2.46643 1.79781 3.53187 1.33398 4.69035 1.33398C5.55622 1.33398 6.34917 1.60773 7.04716 2.14756C7.3994 2.42002 7.71868 2.7535 7.99998 3.14248C8.28138 2.7535 8.60057 2.42002 8.95292 2.14756C9.65092 1.60773 10.4439 1.33398 11.3097 1.33398C12.4681 1.33398 13.5337 1.79781 14.3101 2.63998C15.0775 3.4723 15.5 4.6094 15.5 5.84192C15.5 7.11047 15.0273 8.27173 14.0124 9.49634C13.1044 10.592 11.7995 11.704 10.2886 12.9917C9.77221 13.4316 9.18709 13.9304 8.57974 14.4615C8.41923 14.6019 8.21322 14.6792 7.99998 14.6792ZM4.69035 2.21265C3.78022 2.21265 2.94412 2.57591 2.33586 3.23552C1.71857 3.90513 1.37855 4.83074 1.37855 5.84192C1.37855 6.90885 1.77509 7.86304 2.66419 8.93583C3.52352 9.97277 4.80171 11.062 6.28167 12.3233L6.28439 12.3256C6.80177 12.7665 7.3883 13.2664 7.99872 13.8001C8.61282 13.2653 9.20025 12.7647 9.71865 12.323C11.1985 11.0618 12.4766 9.97277 13.3359 8.93583C14.2249 7.86304 14.6214 6.90885 14.6214 5.84192C14.6214 4.83071 14.2814 3.9051 13.6641 3.23552C13.056 2.57591 12.2198 2.21265 11.3097 2.21265C10.643 2.21265 10.0308 2.42462 9.49034 2.84254C9.00867 3.21516 8.67314 3.6862 8.47638 4.01579C8.37525 4.18527 8.19718 4.28643 7.99998 4.28643C7.80279 4.28643 7.62472 4.18527 7.52356 4.01579C7.32698 3.6862 6.99141 3.21516 6.5096 2.84254C5.96913 2.42462 5.35697 2.21265 4.69035 2.21265Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_92_33396">
                                                            <rect width="15" height="15" fill="white" transform="translate(0.5 0.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <Image src="/assets/card1.png" width={100} height={100} />
                                            <h3>Shankar Mahadevan</h3>
                                            <div className={styles.cardItems}>
                                                <span>
                                                    #Movie Star
                                                </span>
                                                <span>
                                                    #Baby Doll
                                                </span>
                                            </div>
                                            <h5>Starting From ₹9999 </h5>
                                            <button>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>
        </section>
    )
}
export default Fangram;

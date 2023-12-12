'use client'
import stlyes from "./FeatheredCel.module.css";
import Image from "next/image";
import Slider from "react-slick";
const FeatheredCelebrity = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        rows: 2,
        slidesPerRow: 1
    };
    const slideList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        < section className={stlyes.section}>
            <div className="container feathered_cel">
                <h2>Featured Celebrity</h2>
                <p>Get personalised video messages from your favourite celebrity! What's more? The price you see is the price you pay!</p>
                <div className={stlyes.slider}>

                    <Slider {...settings}>
                        {
                            slideList.map((item, index) => {
                                return (
                                    <div className={stlyes.slideItem} key={index}>
                                        <div className={stlyes.card} >
                                            <div className={stlyes.favIcon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M9.99998 18.9049C9.71521 18.9049 9.44076 18.8017 9.22682 18.6143C8.41885 17.9079 7.63991 17.244 6.95264 16.6583L6.94913 16.6553C4.93421 14.9382 3.19425 13.4554 1.98363 11.9946C0.63035 10.3617 0 8.81334 0 7.1219C0 5.47855 0.563515 3.96242 1.5866 2.85265C2.62191 1.72976 4.04249 1.11133 5.58714 1.11133C6.74163 1.11133 7.79889 1.47633 8.72955 2.19609C9.1992 2.55937 9.6249 3.00402 9.99998 3.52265C10.3752 3.00402 10.8008 2.55937 11.2706 2.19609C12.2012 1.47633 13.2585 1.11133 14.413 1.11133C15.9575 1.11133 17.3782 1.72976 18.4135 2.85265C19.4366 3.96242 20 5.47855 20 7.1219C20 8.8133 19.3698 10.3617 18.0165 11.9945C16.8058 13.4554 15.066 14.9381 13.0514 16.655C12.3629 17.2415 11.5828 17.9065 10.773 18.6147C10.559 18.8018 10.2843 18.905 9.99998 18.9049ZM5.58714 2.28289C4.37362 2.28289 3.25882 2.76722 2.44781 3.64671C1.62476 4.53952 1.1714 5.77366 1.1714 7.1219C1.1714 8.54448 1.70011 9.81674 2.88558 11.2471C4.03136 12.6297 5.73561 14.082 7.70889 15.7637L7.71252 15.7668C8.40237 16.3547 9.1844 17.0212 9.9983 17.7329C10.8171 17.0198 11.6003 16.3522 12.2915 15.7634C14.2647 14.0817 15.9688 12.6297 17.1145 11.2471C18.2998 9.81674 18.8286 8.54448 18.8286 7.1219C18.8286 5.77362 18.3752 4.53949 17.5522 3.64671C16.7413 2.76722 15.6264 2.28289 14.413 2.28289C13.524 2.28289 12.7078 2.5655 11.9871 3.12273C11.3449 3.61957 10.8975 4.24761 10.6352 4.68706C10.5003 4.91304 10.2629 5.04792 9.99998 5.04792C9.73705 5.04792 9.49963 4.91304 9.36475 4.68706C9.10264 4.24761 8.65522 3.61957 8.0128 3.12273C7.29217 2.5655 6.47596 2.28289 5.58714 2.28289Z" fill="white" />
                                                </svg>
                                            </div>
                                            <Image src="/assets/cele1.png" width={100} height={100} quality={100} />
                                            <div className={stlyes.cardBody}>
                                                <h4>Sunny Leone {index}</h4>
                                                <div className={stlyes.list}>
                                                    <span>#Movie Star</span>
                                                    <span>#Baby Doll</span>
                                                </div>
                                                <div className={stlyes.cardfooter}>
                                                    <p>Starting From ₹9999</p>
                                                    <button>
                                                        Book Now
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </Slider>
                    <div className={stlyes.slide_btns}>
                        <button className={stlyes.back_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <g clip-path="url(#clip0_92_33310)">
                                    <path d="M4.18589 7.98112L10.9742 1.19291C11.1312 1.03578 11.3408 0.949219 11.5643 0.949219C11.7878 0.949219 11.9974 1.03578 12.1544 1.19291L12.6543 1.6927C12.9796 2.01837 12.9796 2.54768 12.6543 2.87285L6.95395 8.57317L12.6606 14.2798C12.8176 14.437 12.9043 14.6464 12.9043 14.8698C12.9043 15.0934 12.8176 15.3028 12.6606 15.4601L12.1607 15.9598C12.0036 16.1169 11.7941 16.2035 11.5706 16.2035C11.3471 16.2035 11.1375 16.1169 10.9805 15.9598L4.18589 9.16536C4.02851 9.00773 3.94207 8.79727 3.94257 8.57355C3.94207 8.34895 4.02851 8.13862 4.18589 7.98112Z" fill="#D42978" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_92_33310">
                                        <rect width="15.2542" height="15.2542" fill="white" transform="matrix(-1 0 0 1 16.0508 0.949219)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className={stlyes.next_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <g clip-path="url(#clip0_92_33305)">
                                    <path d="M12.8141 7.98112L6.02578 1.19291C5.86878 1.03578 5.65919 0.949219 5.43571 0.949219C5.21223 0.949219 5.00264 1.03578 4.84564 1.19291L4.34572 1.6927C4.02042 2.01837 4.02042 2.54768 4.34572 2.87285L10.046 8.57317L4.3394 14.2798C4.18239 14.437 4.0957 14.6464 4.0957 14.8698C4.0957 15.0934 4.18239 15.3028 4.3394 15.4601L4.83931 15.9598C4.99644 16.1169 5.20591 16.2035 5.42938 16.2035C5.65286 16.2035 5.86245 16.1169 6.01946 15.9598L12.8141 9.16536C12.9715 9.00773 13.0579 8.79727 13.0574 8.57355C13.0579 8.34895 12.9715 8.13862 12.8141 7.98112Z" fill="#D42978" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_92_33305">
                                        <rect width="15.2542" height="15.2542" fill="white" transform="translate(0.949219 0.949219)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

        </section>
    )
}



export default FeatheredCelebrity
'use client'
import styles from './faqs.module.css';
import { useState } from 'react';
const Faqs = () => {
    const [active, setActive] = useState(1);

    const questions = [
        {
            id: 1,
            question: "Lorem ipsum is placeholder text commonly",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
        },
        {
            id: 2,
            question: "How much do cats sleep?",
            answer: "The average cat sleeps 12-16 hours per day",
        },
        {
            id: 3,
            question: "How long do cats live",
            answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
        },
    ];
    return (
        <section className={styles.section}>
            <div className='container'>
                <h2>Frequently Asked Questions</h2>
                <div className={styles.faqs_list}>
                    {questions.map(question =>
                        <div className={` ${styles.faq_item} ${active == question.id ? styles.active : null}`} key={question.id}>
                            <div className={styles.faq_head} onClick={() => setActive(question.id)}>
                                <span>{question.id}</span>
                                <p>{question.question}</p>
                            </div>
                            <div className={styles.faq_body}>
                                <p>
                                    {question.answer}
                                </p>
                            </div>
                            {active == question.id ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_92_33761)">
                                        <path d="M9.74444 3.97773L17.4961 11.7296C17.6756 11.9089 17.7744 12.1482 17.7744 12.4034C17.7744 12.6586 17.6756 12.8979 17.4961 13.0772L16.9254 13.6481C16.5535 14.0196 15.9491 14.0196 15.5778 13.6481L9.06835 7.13868L2.55172 13.6553C2.37229 13.8346 2.13309 13.9336 1.87804 13.9336C1.6227 13.9336 1.3835 13.8346 1.20393 13.6553L0.633343 13.0844C0.453911 12.905 0.355061 12.6658 0.355061 12.4106C0.355061 12.1554 0.453911 11.9161 0.633343 11.7368L8.39211 3.97773C8.57211 3.79802 8.81244 3.69931 9.06792 3.69988C9.3244 3.69931 9.56458 3.79802 9.74444 3.97773Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_92_33761">
                                            <rect width="17.4194" height="17.4194" fill="white" transform="matrix(0 -1 -1 0 17.7744 17.5273)" />
                                        </clipPath>
                                    </defs>
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_92_33770)">
                                        <path d="M9.74444 14.034L17.4961 6.28215C17.6756 6.10286 17.7744 5.86352 17.7744 5.60833C17.7744 5.35313 17.6756 5.11379 17.4961 4.9345L16.9254 4.36363C16.5535 3.99216 15.9491 3.99216 15.5778 4.36363L9.06835 10.873L2.55172 4.35641C2.37229 4.17712 2.13309 4.07813 1.87804 4.07813C1.6227 4.07813 1.3835 4.17712 1.20393 4.35641L0.633343 4.92728C0.453911 5.10671 0.355061 5.3459 0.355061 5.6011C0.355061 5.8563 0.453911 6.09564 0.633343 6.27493L8.39211 14.034C8.57211 14.2137 8.81244 14.3124 9.06792 14.3118C9.3244 14.3124 9.56458 14.2137 9.74444 14.034Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_92_33770">
                                            <rect width="17.4194" height="17.4194" fill="white" transform="matrix(0 1 -1 0 17.7744 0.484375)" />
                                        </clipPath>
                                    </defs>
                                </svg>}
                        </div>)}


                </div>
                <div className={styles.moreBtn}>

                    <button>
                        See All FAQ’s
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Faqs;
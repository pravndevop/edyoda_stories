import React from 'react'
import styles from './Card.module.css'
function Card() {
  return (
    <>
        <div className={styles.cards}>
            <div className={styles.card}>
                 <img src="https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.card_image} />
                        <div className={styles.card_content}>
                                <h2>this is the heading to the card</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto sapiente tempora quia quae rem aliquam perspiciatis molestias reprehenderit fuga eveniet harum consequuntur, quis non ullam laudantium commodi cum doloribus!</p>
                        </div>
            </div>
            <div className={styles.card}>
                 <img src="https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.card_image} />
                        <div className={styles.card_content}>
                                <h2>this is the heading to the card</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto sapiente tempora quia quae rem aliquam perspiciatis molestias reprehenderit fuga eveniet harum consequuntur, quis non ullam laudantium commodi cum doloribus!</p>
                        </div>
            </div>
            <div className={styles.card}>
                 <img src="https://images.pexels.com/photos/4386402/pexels-photo-4386402.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.card_image} />
                        <div className={styles.card_content}>
                                <h2>this is the heading to the card</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto sapiente tempora quia quae rem aliquam perspiciatis molestias reprehenderit fuga eveniet harum consequuntur, quis non ullam laudantium commodi cum doloribus!</p>
                        </div>
            </div>
            <div className={styles.card}>
                 <img src="https://images.pexels.com/photos/5125160/pexels-photo-5125160.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.card_image} />
                        <div className={styles.card_content}>
                                <h2>this is the heading to the card</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto sapiente tempora quia quae rem aliquam perspiciatis molestias reprehenderit fuga eveniet harum consequuntur, quis non ullam laudantium commodi cum doloribus!</p>
                        </div>
            </div>
            <div className={styles.card}>
                 <img src="https://images.pexels.com/photos/10104930/pexels-photo-10104930.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.card_image} />
                        <div className={styles.card_content}>
                                <h2>Introduction To A Machine Learning Online Course</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto sapiente tempora quia quae rem aliquam perspiciatis molestias reprehenderit fuga eveniet harum consequuntur, quis non ullam laudantium commodi cum doloribus!</p>
                        </div>
            </div>   
            <div className={styles.card}>
                 <img src="https://images.pexels.com/photos/4386408/pexels-photo-4386408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.card_image} />
                        <div className={styles.card_content}>
                                <h2>this is the heading to the card</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto sapiente tempora quia quae rem aliquam perspiciatis molestias reprehenderit fuga eveniet harum consequuntur, quis non ullam laudantium commodi cum doloribus!</p>
                        </div>
            </div>  
        </div>

    </>
  )
}

export default Card;
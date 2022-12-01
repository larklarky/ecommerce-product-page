import { useState, useContext } from 'react';
import  styles from './styles/ProductPage.module.css';
import {Sneaker, AppContext} from './App';
import {BsCart3} from 'react-icons/bs';
import {HiPlusSm, HiMinusSm} from 'react-icons/hi';
import {Gallery} from './Gallery';

type InfoProps = {
    sneakers: Sneaker;
    currency: string;
}
export const ProductPage = ({sneakers, currency}: InfoProps) => {
    const [amount, setAmount] = useState<number>(1);
    const {state, dispatch} = useContext(AppContext);

    const calcPrice = (price: number, discount: number) => {
        return price - (price / 100 * discount);
    }


    const Convertion = (amount: number, currency: string = 'USD') => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: currency, minimumFractionDigits: 2}).format(amount)
    }
    return(
        <div className={styles.container}>
            <Gallery images={sneakers.images}/>
            <div className={styles.info}>
                <div className={styles.brand}>{sneakers.brand}</div>
                <div className={styles.title}>{sneakers.title}</div>
                <div className={styles.description}>{sneakers.description}</div>
                <div className={styles.priceInfo}>
                    <div className={styles.price}>
                        <span>{sneakers.discount ? Convertion(calcPrice(sneakers.price, sneakers.discount), currency) : Convertion(sneakers.price, currency)}</span>
                        {sneakers.discount ? <span className={styles.discount}>{sneakers.discount}%</span> : ''}
                        
                    </div>
                    {sneakers.discount ? <div className={styles.oldPrice}>{Convertion(sneakers.price, currency)}</div> : ''}
                </div>
                <div className={styles.actions}>
                    <div className={styles.counter}>
                        <div className={styles.btn} onClick={() => {
                            if(amount < 2) {
                                setAmount(1)
                            } else {
                                setAmount(amount - 1)
                            }
                            }
                            }>
                            <HiMinusSm />
                        </div>
                        
                        <span>{amount}</span>
                        <div className={styles.btn} onClick={() => setAmount(amount + 1)}>
                            <HiPlusSm/>
                        </div>
                    </div>
                    <button>
                        <BsCart3/>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
import { useContext } from 'react';
import styles from './styles/CartItem.module.css';
import {FaTrashAlt} from 'react-icons/fa';
import { Item, AppContext} from './App';

type CartProps = {
    item: Item;
}

const Convertion = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: currency, minimumFractionDigits: 2}).format(amount)
}

const CalcPrice = (price: number, discount: number | null) => {
    if(discount) {
        return price - (price / 100 * discount)
    } else {
        return price
    }
    
}

export const CartItem = ({item}: CartProps) => {
    const {state, dispatch} = useContext(AppContext);

    const handleDelete = (itemId: number) => {
        dispatch({type: 'delete', payload: {itemId: itemId}})
    }

    return(
        <div key={item.item.id} className={styles.container}>
            <div className={styles.thumbnail}>
                <img src={item.item.images[0].thumbnail} alt='item-image'></img>
            </div>
            <div className={styles.info}>
                <div className={styles.header}>{item.item.title}</div>
                <div className={styles.price}>
                    <span>{Convertion(CalcPrice(item.item.price, item.item.discount))} x {item.amount}</span>
                    <span> {Convertion(CalcPrice(item.item.price, item.item.discount) * item.amount)}</span>

                </div>
            </div>
            <div className={styles.delete} onClick={() => handleDelete(item.item.id)}><FaTrashAlt/></div>
        </div>
    )
}
import {BsCart3} from 'react-icons/bs';
import styles from './styles/Cart.module.css';
import { Item, AppContext } from './App';
import { useState, useContext } from 'react';
import {CartItem} from './CartItem';

type CartProps = {
    cart: Item[];
}

export const Cart = ({cart}: CartProps) => {
    const [active, setActive] = useState<boolean>(false);
    
    return (
        <div className={styles.cart}>
                <BsCart3  onClick={() => setActive(!active)} size='25px'/>
                {cart.length !== 0 ? <div className={styles.indicator}>{cart.length}</div> : ''}
                <div className={`${styles.container} ${active ? styles.active : ''}` }>
                    <div className={styles.header}>Cart</div>
                    <div className={styles.content}>
                        {cart.length > 0 ? cart.map(item => {
                            return <CartItem item={item} />
                        }) : <div className={styles.empty}>Your cart is empty</div>}
                        
                    </div>
                    {cart.length > 0 ? <div className={styles.actions}>
                        <button>Checkout</button>
                    </div> : ''}
                    

                </div>
        </div>
    ) 
}
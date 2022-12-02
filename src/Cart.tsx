import {BsCart3} from 'react-icons/bs';
import styles from './styles/Cart.module.css';
import { Item, Sneaker } from './App';
import { useState } from 'react';
import {CartItem} from './CartItem';

type CartProps = {
    cart: Item[];
}

export const Cart = ({cart}: CartProps) => {
    const [active, setActive] = useState<boolean>(false);
    const fakeItem : Item = {
        item: {
            id: 1,
            brand: 'Sneaker Company',
            title: 'Fall Limited Edition Sneakers',
            description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer',
            price: 250,
            discount: 50,
            images: [
                {
                    id: 1,
                    main: 'image-product-1.jpg',
                    thumbnail: 'image-product-1-thumbnail.jpg',
                },
                {
                    id: 2,
                    main: 'image-product-2.jpg',
                    thumbnail: 'image-product-2-thumbnail.jpg',
                },
                {
                    id: 3,
                    main: 'image-product-3.jpg',
                    thumbnail: 'image-product-3-thumbnail.jpg',
                },
                {
                    id: 4,
                    main: 'image-product-4.jpg',
                    thumbnail: 'image-product-4-thumbnail.jpg',
                }
            ]
        },
        amount: 3,
    }    

    return (
        <div className={styles.cart}>
                <BsCart3 size='25px'/>
                {cart.length === 0 ? <div className={styles.indicator}>{cart.length}</div> : ''}
                <div className={styles.container}>
                    <div className={styles.header}>Cart</div>
                    <div className={styles.content}>
                        <CartItem item={fakeItem} />
                    </div>
                    <div className={styles.actions}>
                        <button>Checkout</button>
                    </div>
                    

                </div>
        </div>
    ) 
}
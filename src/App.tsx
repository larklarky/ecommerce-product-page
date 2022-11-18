import React, { createContext, useReducer, useState } from 'react';
import  styles from './styles/App.module.css';
import {BsCart3} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';

type Sneaker = {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: number;
  discount: number | null;
}

interface AppContextInterface {
  currency: string;
  sneakers: Sneaker[];
}

type Payload = {
  sneakersId: number;
  amount: number;
}


type Action = {
  type: string;
  payload: any;
}

type ContextValue = {
  state: AppContextInterface;
  dispatch: (action: Action) => void;
}

const AppData: AppContextInterface ={
  currency: 'USD',
  sneakers: [
    {
      id: 1,
      brand: 'Sneaker Company',
      title: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer',
      price: 250,
      discount: 50,
    }
  ]
}

export const AppContext = createContext<ContextValue>({state: AppData, dispatch: (action: Action) => {}});

const initialState = AppData;

function reducer(state: AppContextInterface, action: Action) {
  switch (action.type) {
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  console.log('menuActive', menuActive)
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className={styles.App}>
        <div className={styles.navbar}>
          <div className={styles.main}>
            <div className={styles.toggler} onClick={() => setMenuActive(true)}>
              <GiHamburgerMenu size='25px'/>
            </div>
            <div className={styles.logo}>sneakers</div>      
            <div className={`${styles.menu} ${menuActive ? styles.active : ' '}`}>
              <div className={styles.close} onClick={() => setMenuActive(false)}><IoMdClose size='25px'/></div>
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.cart}><BsCart3 size='25px'/></div>
            <div className={styles.avatar}>
              <img src='/image-avatar.png' alt='user-avatar'></img>
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

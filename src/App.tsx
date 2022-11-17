import React, { createContext, useReducer } from 'react';
import logo from './logo.svg';
import  styles from './styles/App.module.css';

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
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className={styles.App}>
        <div></div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

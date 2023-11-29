import React, {useCallback, useState} from 'react';
import Cart from './components/cart';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    deleteItem: useCallback((code) => {
      store.deleteItemFromCart(code);
    }, [store]),

    addItem: useCallback((code) => {
      store.addItemInCart(code);
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls cart={cart} openCart={() => setIsCartOpened(true)}/>
      <List list={list} handleBtn={callbacks.addItem}/>
      {isCartOpened && <Cart cart={cart} closeCart={() => setIsCartOpened(false)} deleteItem={callbacks.deleteItem}/>}
    </PageLayout>
  );
}

export default App;

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   */
  addItemInCart(code) {
    const itemInCart = this.state.cart.find(item => item.code === code);
    this.setState({
      ...this.state,
      cart: [
        ...this.state.cart.filter(item => item.code !== code),
        itemInCart
          ? {
            ...itemInCart,
            count: itemInCart.count + 1
          }
          : {
            ...this.state.list.find(item => item.code === code),
            count: 1
          }
      ]
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItemFromCart(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter(item => item.code !== code)
    })
  };
}

export default Store;

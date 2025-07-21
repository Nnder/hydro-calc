import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Array<{ [key: string]: any; count: number }>>([])

  // Инициализация корзины из localStorage
  // if (import.meta.client) {
  //   const value = localStorage.getItem('cart')
  //   if (value) cart.value = JSON.parse(value)

  //   console.log(JSON.parse(value))
  // }

  const setCart = () => {
    if (import.meta.client) {
      try {
        const value = localStorage.getItem('cart')
        if (value) {
          // {{change 1}}: Безопасный парсинг и логика
          cart.value = JSON.parse(value)
        }
      } catch (e) {
        console.error('LocalStorage parse error:', e)
      }

      console.log('data is setted', cart.value)
    }
  }

  setCart()

  const saveCart = () => {
    console.log('save', cart.value)
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  const addItem = (item: Record<string, any>) => {
    console.log('Полученные данные:', item)
    console.log('Полученные данные obj:', { ...item, count: 1 })
    cart.value.push({ ...item, count: 1 })
    console.log('FINAL DATA', cart.value)

    saveCart()
  }

  const removeItem = (index: number) => {
    cart.value.splice(index, 1)
    saveCart()
  }

  const increaseItem = (index: number) => {
    cart.value[index].count += 1
    saveCart()
  }

  const decreaseItem = (index: number) => {
    if (cart.value[index].count > 1) {
      cart.value[index].count -= 1
      saveCart()
    }
  }

  const clearCart = () => {
    cart.value = []
    saveCart()
  }

  const totalItems = () => {
    return cart.value.reduce((total, item) => total + item.count, 0)
  }

  const totalPrice = () => {
    return cart.value.reduce((total, item) => total + item.price * item.count, 0)
  }

  return {
    cart,
    saveCart,
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
    clearCart,
    totalItems,
    totalPrice,
    setCart,
  }
})

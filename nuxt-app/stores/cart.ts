import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Record<string, any>[]>([])

  // const setCart = () => {
  //   const value = localStorage.getItem('cart')
  //   if (value) cart.value = JSON.parse(value)
  //   console.log(cart.value)
  // }

  if (process.client) {
    const value = localStorage.getItem('cart')
    if (value) cart.value = JSON.parse(value)
    console.log(cart.value)
  }

  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
    console.log(cart.value)
  }

  const addItem = (item: Record<string, any>) => {
    cart.value?.push({ ...item, count: 1 })
    saveCart()
  }

  const removeItem = (index: number) => {
    cart.value = cart.value?.filter((val, i) => i !== index)
    saveCart()
  }

  const increaseItem = (index: number, count: number) => {
    cart.value[index].count = count
  }

  const decreaseItem = (index: number, count: number) => {
    cart.value[index].count = count > 0 ? count : 1
  }

  return { cart, saveCart, addItem, removeItem, increaseItem, decreaseItem }
})

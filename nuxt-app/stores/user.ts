import { defineStore } from 'pinia'
import type { User } from '~/types/user.types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const isAuth = ref(false)
  const showAuthForm = ref(false)

  const setUser = (userData: User) => {
    user.value = userData
    isAuth.value = true
  }

  const clearUser = () => {
    user.value = null
    isAuth.value = false
  }

  const loadCsrfToken = async () => {
    await useSanctumFetch('/sanctum/csrf-cookie', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  }

  // loadCsrfToken()

  return { user, setUser, clearUser }
})

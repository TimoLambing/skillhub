import { defineStore } from 'pinia'
import { ref } from 'vue'
/* import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_USERAPI_URL */

export const useUserStore = defineStore('users', () => {
  const user = ref({
    auth: false,
    userType: '',
    firstName: '',
    lastName: '',
    occupation: '',
    email: '',
    avatarPath: '',
  })

  const token = ref()

  const home = ref({
    appDownloaded: false,
    rememberMe: false,
    theme: 'dark',
  })

  const checkAuth = async () => {
    // Mocking the authentication check
    user.value.auth = true
    return true
  }

  return { user, token, checkAuth, home }
})

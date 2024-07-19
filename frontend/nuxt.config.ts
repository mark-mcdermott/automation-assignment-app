let development = process.env.NODE_ENV !== 'production'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/icon', '@sidebase/nuxt-auth'],
  devServer: { port: 3001 },
  auth: {
    computed: { pathname: development ? "http://localhost:3000/api/auth/" : "https://automation-assignment-app-backend.fly.dev/api/auth/" },
    isEnabled: true,
    globalAppMiddleware: { isEnabled: true },
    provider: {
      type: 'local',
      pages: { login: '/' },
      token: { signInResponseTokenPointer: '/token' },
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/session', method: 'get' }
      },
    },
  },
})